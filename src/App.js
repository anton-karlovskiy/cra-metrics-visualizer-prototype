
import React, { useState, useEffect } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import LighthouseAction from 'components/LighthouseAction';
import MetricsVisualizer from 'components/MetricsVisualizer';
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

const App = () => {
  const [lighthouseInfo, setLighthouseInfo] = useState({
    metrics: {},
    screenshotDetails: {}
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
    setLoading(true);
    let lhr;
    try {
      const strategy = STRATEGY.MOBILE; // TODO: should be a toggle
      const lighthouseEndpoint = `${process.env.REACT_APP_ENV === 'production' ? PROD_SERVER_URL : DEV_SERVER_URL}${LIGHTHOUSE_ENDPOINT}?url=${url}&strategy=${strategy}`;
      const response = await fetch(lighthouseEndpoint);
      lhr = await response.json();

      console.log('[LighthouseAction] lhr => ', lhr);
      console.log('[LighthouseAction] => final-screenshot => ', lhr.audits['final-screenshot']);

      const metrics = {
        [METRICS.FIRST_BYTE.ID]: lhr.audits[METRICS.FIRST_BYTE.ID],
        [METRICS.FIRST_CONTENTFUL_PAINT.ID]: lhr.audits[METRICS.FIRST_CONTENTFUL_PAINT.ID],
        [METRICS.FIRST_INPUT_DELAY.ID]: lhr.audits[METRICS.FIRST_INPUT_DELAY.ID],
        [METRICS.SPEED_INDEX.ID]: lhr.audits[METRICS.SPEED_INDEX.ID],
        [METRICS.TIME_TO_INTERACTIVE.ID]: lhr.audits[METRICS.TIME_TO_INTERACTIVE.ID]
      };
      
      const screenshotDetails = lhr.audits['screenshot-thumbnails'].details;

      console.log('[LighthouseAction] metrics => ', metrics);
      console.log('[LighthouseAction] screenshotDetails => ', screenshotDetails);

      const dimensions = await getImageDimensions(screenshotDetails.items[0].data);
      screenshotDetails.intrinsicWidth = dimensions.width;
      screenshotDetails.intrinsicHeight = dimensions.height;

      setLighthouseInfo({
        metrics,
        screenshotDetails
      });
    } catch (error) {
      console.log('[LighthouseAction submitCallback] error => ', error);
      setLighthouseInfo({
        metrics: {},
        screenshotDetails: {}
      });
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
      [INPUT_NAMES.LIGHTHOUSE_URL]: getURLQueryParam()
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
        <MetricsVisualizer
          runtimeError={runtimeError}
          lighthouseInfo={lighthouseInfo} />
      </main>
      <Footer targetUrl={inputs[INPUT_NAMES.LIGHTHOUSE_URL]} />
    </>
  );
};

export default App;
