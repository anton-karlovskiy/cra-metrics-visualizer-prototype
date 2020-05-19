/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const APP_NAME = 'Metrics Viz';
const LIGHTHOUSE_ENDPOINT ='/lighthouse';

const METRICS = {
  SERVER_RESPONSE_TIME: {
    ID: 'server-response-time',
    TITLE: 'Server Response',
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
  LIGHTHOUSE_ENDPOINT,
  METRICS,
  STRATEGY,
  INPUT_NAMES
};
