
const APP_NAME = 'Metrics Visualizer';
const LOGO_URL = 'https://www.gstatic.com/images/icons/material/product/2x/pagespeed_64dp.png';
const PSI_ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

const PERF_METRICS = {
  FIRST_BYTE: {
    KEY: 'time-to-first-byte',
    LABEL: 'First Byte'
  },
  FIRST_CONTENTFUL_PAINT: {
    KEY: 'first-contentful-paint',
    LABEL: 'First Contentful Paint'
  },
  FIRST_INPUT_DELAY: {
    KEY: 'max-potential-fid',
    LABEL: 'First Input Delay'
  },
  SPEED_INDEX: {
    KEY: 'speed-index',
    LABEL: 'Speed Index'
  },
  TIME_TO_INTERACTIVE: {
    KEY: 'interactive',
    LABEL: 'Time To Interactive'
  }
};

const STRATEGY = {
  MOBILE: 'mobile',
  DESKTOP: 'desktop'
};

export {
  APP_NAME,
  LOGO_URL,
  PSI_ENDPOINT,
  PERF_METRICS,
  STRATEGY
};
