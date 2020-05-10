
import React from 'react';

import './footer.css';

const Footer = ({ targetUrl }) => (
  <footer>
    <div className='footer-inside'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={`https://developers.google.com/speed/pagespeed/insights/?url=${targetUrl}`}>
        PageSpeed Insights report
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={`https://googlechrome.github.io/lighthouse/viewer/?psiurl=${targetUrl}&category=accessibility&category=performance&category=pwa&category=best-practices&category=seo`}>
        Lighthouse report
      </a>
    </div>
  </footer>
);

export default Footer;
