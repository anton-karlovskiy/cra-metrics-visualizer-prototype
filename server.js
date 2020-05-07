
const LIGHTHOUSE_ENDPOINT ='/lighthouse';

const express = require('express');
const path = require('path');
const cors = require('cors');
const lighthouse = require('lighthouse');
// ray test touch <
const puppeteer = require('puppeteer');
const request = require('request');
const util = require('util');
// ray test touch >
const chromeLauncher = require('chrome-launcher');
// ray test touch <
// const fs = require('fs');
// const http = require('http');
// const https = require('https');
// ray test touch >


// TODO: optimize with https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#performance-only-lighthouse-run
const options = {
  logLevel: 'info',
  emulatedFormFactor: 'mobile',
  throttlingMethod: 'devtools',
  onlyCategories: ['performance'],
  chromeFlags: ['--headless', '--disable-gpu'],
  // ray test touch <
  chromePath: '/'
  // ray test touch >
};

const lighthouseFromPuppeteer = async (url, options, config = null) => {
  // Launch chrome using chrome-launcher
  const chrome = await chromeLauncher.launch(options);
  options.port = chrome.port;

  // ray test touch <
  // Connect chrome-launcher to puppeteer
  const resp = await util.promisify(request)(`http://localhost:${options.port}/json/version`);
  const { webSocketDebuggerUrl } = JSON.parse(resp.body);
  const browser = await puppeteer.connect({browserWSEndpoint: webSocketDebuggerUrl});
  // ray test touch >

  // Run Lighthouse
  const { lhr } = await lighthouse(url, options, config);
  // ray test touch <
  await browser.disconnect();
  // ray test touch >

  try {
    await chrome.kill();
  } catch (error) {
    console.log('[lighthouseFromPuppeteer] error => ', error);
  }

  return lhr;
};

const app = express();
app.disable('x-powered-by');
app.use(cors());
// ray test touch <
const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
};
app.use(allowCrossDomain);
// ray test touch >
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
    const lhr = await lighthouseFromPuppeteer(url, {
      ...options,
      emulatedFormFactor: strategy
    });
  
    return res.status(200).send(lhr);
  } catch (error) {
    return res.status(500).send({
      message: 'Oops something went wrong!',
      code: 500,
      error
    });
  }
});

// need to declare a "catch all" route on your express server 
// that captures all page requests and directs them to the client
// the react-router do the route part
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// ray test touch <
app.listen(
  PORT,
  () => {
    console.log(`Ready on http://localhost:${PORT}`);
  }
);
// const httpServer = http.createServer(app);
// const httpsServer = https.createServer({
//   key: fs.readFileSync('sslcert/server.key'),
//   cert: fs.readFileSync('sslcert/server.cert')
// }, app);
// httpServer.listen(PORT + 1);
// httpsServer.listen(PORT,
//   () => {
//   console.log(`Ready on http://localhost:${PORT}`);
// });
// ray test touch >