
const APP_NAME = 'Metrics Visualizer';
const LOGO_URL = 'https://www.gstatic.com/images/icons/material/product/2x/pagespeed_64dp.png';
const LIGHTHOUSE_ENDPOINT ='/lighthouse';

const METRICS = {
  FIRST_BYTE: {
    ID: 'time-to-first-byte',
    TITLE: 'First Byte',
    COLOR: '--palette-blue-500'
  },
  FIRST_PAINT: {
    ID: 'first-paint',
    TITLE: 'First Paint',
    COLOR: '--palette-amber-500'
  },
  FIRST_CONTENTFUL_PAINT: {
    ID: 'first-contentful-paint',
    TITLE: 'First Contentful Paint',
    COLOR: '--palette-green-500'
  },
  LARGEST_CONTENTFUL_PAINT: {
    ID: 'largest-contentful-paint',
    TITLE: 'Largest Contentful Paint',
    COLOR: '--palette-purple-500'
  },
  FIRST_INPUT_DELAY: {
    ID: 'max-potential-fid',
    TITLE: 'First Input Delay',
    COLOR: '--palette-teal-500'
  },
  SPEED_INDEX: {
    ID: 'speed-index',
    TITLE: 'Speed Index',
    COLOR: '--palette-orange-500'
  },
  TIME_TO_INTERACTIVE: {
    ID: 'interactive',
    TITLE: 'Time To Interactive',
    COLOR: '--palette-pink-500'
  },
  CUMULATIVE_LAYOUT_SHIFT: {
    ID: 'cumulative-layout-shift',
    TITLE: 'Cumulative Layout Shift',
    COLOR: '--palette-cyan-500'
  },
  TOTAL_BLOCKING_TIME: {
    ID: 'total-blocking-time',
    TITLE: 'Total Blocking Time',
    COLOR: '--palette-indigo-500'
  }
};

const STRATEGY = {
  MOBILE: 'mobile',
  DESKTOP: 'desktop'
};

const INPUT_NAMES = {
  LIGHTHOUSE_URL: 'lighthouse-url',
  IS_DESKTOP_STRATEGY: 'is-desktop-strategy'
};

export {
  APP_NAME,
  LOGO_URL,
  LIGHTHOUSE_ENDPOINT,
  METRICS,
  STRATEGY,
  INPUT_NAMES
};
