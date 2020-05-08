
const LIGHTHOUSE_ENDPOINT ='/lighthouse';

const express = require('express');
const path = require('path');
const cors = require('cors');
const lighthouse = require('lighthouse');
const puppeteer = require('puppeteer');
const { URL } = require('url');

const lighthouseFromPuppeteer = async (url, strategy = 'mobile') => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const { lhr } = await lighthouse(url, {
    port: (new URL(browser.wsEndpoint())).port,
    output: 'json',
    logLevel: 'info',
    emulatedFormFactor: strategy,
    throttlingMethod: 'devtools',
    onlyCategories: ['performance'],
    chromeFlags: ['--headless', '--disable-gpu']
  });
  console.log(`Lighthouse scores: ${Object.values(lhr.categories).map(c => c.score).join(', ')}`);
  await browser.close();

  return lhr;
};

const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

const PORT = process.env.PORT || 5000;

app.get(LIGHTHOUSE_ENDPOINT, async (req, res) => {
  const { url, strategy } = req.query;
  // TODO: url validation
  if (!url) {
    return res.status(400).send({
      message: 'The URL is not valid.',
      code: 400
    });
  }

  try {
    const lhr = await lighthouseFromPuppeteer(url, strategy);
  
    return res.status(200).send(lhr);
  } catch (error) {
    return res.status(500).send({
      message: 'Oops something went wrong!',
      code: 500,
      error
    });
  }
});

app.get('/puppeteer', async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto('https://developers.google.com/web/tools/puppeteer');
    await page.screenshot({path: __dirname + '/puppeteer.png'});
    await browser.close();
    res.sendFile(__dirname + '/puppeteer.png');
  } catch (error) {
    console.log(error);
  }
});

app.get('/ping', (req, res) => {
  return res.status(200).send('pong');
});

// need to declare a "catch all" route on your express server 
// that captures all page requests and directs them to the client
// the react-router do the route part
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(
  PORT,
  () => {
    console.log(`Ready on http://localhost:${PORT}`);
  }
);
