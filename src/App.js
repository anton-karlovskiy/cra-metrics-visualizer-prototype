
import React, { useState, useEffect, lazy, Suspense } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import LighthouseAction from 'components/LighthouseAction';
import useForm from 'utils/hooks/use-form';
import { getImageDimensions } from 'utils/helpers';
import {
  getURLQueryParam,
  setURLQueryParam,
  checkPageReloaded
} from 'utils/helpers';
import { DEV_SERVER_URL, PROD_SERVER_URL } from 'config';
import { METRICS, LIGHTHOUSE_ENDPOINT, STRATEGY, INPUT_NAMES } from 'utils/constants';
import './App.css';

const MetricsVisualizer = lazy(
  () => import(/* webpackPrefetch: true, webpackChunkName: 'metrics-visualizer' */ 'components/MetricsVisualizer')
);

const App = () => {
  const [lighthouseInfo, setLighthouseInfo] = useState({
    metrics: {},
    screenshotDetails: {},
    finalScreenshot: {}
  });
  const [loading, setLoading] = useState(false);
  const [runtimeError, setRuntimeError] = useState({});
  useEffect(() => {
    const pageReloaded = checkPageReloaded();
    if (pageReloaded) {
      submitCallback();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitCallback = async () => {
    const url = inputs[INPUT_NAMES.LIGHTHOUSE_URL];
    setURLQueryParam(url);
    setRuntimeError({});
    setLighthouseInfo({
      metrics: {},
      screenshotDetails: {},
      finalScreenshot: {}
    });

    if (!url) return;
    
    setLoading(true);
    let lhr;
    try {
      const strategy =
        inputs[INPUT_NAMES.IS_DESKTOP_STRATEGY]
          ? STRATEGY.DESKTOP
          : STRATEGY.MOBILE;
      const lighthouseEndpoint = `${process.env.REACT_APP_ENV === 'production' ? PROD_SERVER_URL : DEV_SERVER_URL}${LIGHTHOUSE_ENDPOINT}?url=${url}&strategy=${strategy}`;
      const response = await fetch(lighthouseEndpoint);
      lhr = await response.json();

      console.log('[LighthouseAction] lhr => ', lhr);

      const metrics = {
        [METRICS.FIRST_BYTE.ID]: lhr.audits[METRICS.FIRST_BYTE.ID],
        [METRICS.FIRST_CONTENTFUL_PAINT.ID]: lhr.audits[METRICS.FIRST_CONTENTFUL_PAINT.ID],
        [METRICS.LARGEST_CONTENTFUL_PAINT.ID]: lhr.audits[METRICS.LARGEST_CONTENTFUL_PAINT.ID],
        [METRICS.FIRST_INPUT_DELAY.ID]: lhr.audits[METRICS.FIRST_INPUT_DELAY.ID],
        [METRICS.SPEED_INDEX.ID]: lhr.audits[METRICS.SPEED_INDEX.ID],
        [METRICS.TOTAL_BLOCKING_TIME.ID]: lhr.audits[METRICS.TOTAL_BLOCKING_TIME.ID],
        [METRICS.TIME_TO_INTERACTIVE.ID]: lhr.audits[METRICS.TIME_TO_INTERACTIVE.ID],
        [METRICS.CUMULATIVE_LAYOUT_SHIFT.ID]: lhr.audits[METRICS.CUMULATIVE_LAYOUT_SHIFT.ID]
      };
      const finalScreenshot = lhr.audits['final-screenshot'];
      console.log('[LighthouseAction] => final-screenshot => ', finalScreenshot);
      const screenshotDetails = lhr.audits['screenshot-thumbnails'].details;

      console.log('[LighthouseAction] metrics => ', metrics);
      console.log('[LighthouseAction] screenshotDetails => ', screenshotDetails);

      const dimensions = await getImageDimensions(screenshotDetails.items[0].data);
      screenshotDetails.intrinsicWidth = dimensions.width;
      screenshotDetails.intrinsicHeight = dimensions.height;
      finalScreenshot.intrinsicWidth = dimensions.width;
      finalScreenshot.intrinsicHeight = dimensions.height;

      setLighthouseInfo({
        metrics,
        screenshotDetails,
        finalScreenshot
      });
    } catch (error) {
      console.log('[LighthouseAction submitCallback] error => ', error);
    }

    if (lhr && lhr.runtimeError) {
      setRuntimeError(lhr.runtimeError);
    }

    setLoading(false);
  };

  const {
    inputs,
    inputChangeHandler,
    onSubmitHandler
  } = useForm({
    submitCallback,
    initialInputs: {
      [INPUT_NAMES.LIGHTHOUSE_URL]: getURLQueryParam(),
      [INPUT_NAMES.IS_DESKTOP_STRATEGY]: false
    }
  });

  return (
    <>
      <Header />
      <main>
        <LighthouseAction
          loading={loading}
          inputs={inputs}
          onSubmit={onSubmitHandler}
          inputChange={inputChangeHandler} />
        <Suspense fallback='Loading...'>
          <MetricsVisualizer
            loading={loading}
            inputs={inputs}
            inputChange={inputChangeHandler}
            runtimeError={runtimeError}
            lighthouseInfo={lighthouseInfo} />
        </Suspense>
      </main>
      <Footer targetUrl={inputs[INPUT_NAMES.LIGHTHOUSE_URL]} />
    </>
  );
};

export default App;
