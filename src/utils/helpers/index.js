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

const QUERY_PARAMS = {
  URL: 'url'
};

const getURLQueryParam = () => {
  const queryString = window.location.search;
  const queryParams = new URLSearchParams(queryString);
  const url = queryParams.get(QUERY_PARAMS.URL);

  return url || '';
};

const setURLQueryParam = url => {
  const encodedUrl = encodeURIComponent(url);
  window.history.pushState(null, null, `/?${QUERY_PARAMS.URL}=${encodedUrl}`);
};

const checkPageReloaded = () => {
  // check for Navigation Timing API support
  if (window.performance) {
    return performance.navigation.type === 1;
  } else {
    console.info('[LighthouseAction checkPageReloaded] window.performance does not work on this browser');
    return false;
  }
};

const getImageDimensions = file => {
  return new Promise ((resolved, rejected) => {
    const image = new Image();
    image.onload = function() {
      resolved({
        width: image.width,
        height: image.height
      });
    };
    image.src = file;
  });
};

export {
  getImageDimensions,
  getURLQueryParam,
  setURLQueryParam,
  checkPageReloaded
};
