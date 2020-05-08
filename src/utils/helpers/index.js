
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
