
import React, { useState } from 'react';

import ContainedButton from 'components/UI/ContainedButton';
import TextField from 'components/UI/TextField';
import useForm from 'utils/hooks/use-form';
import { getImageDimensions } from 'utils/helpers';
import { METRICS, LIGHTHOUSE_ENDPOINT, STRATEGY } from 'utils/constants';
import { DEV_SERVER_URL, PROD_SERVER_URL } from 'config';
import './lighthouse-action.css';

const LIGHTHOUSE_URL = 'lighthouse-url';

const LighthouseAction = ({ updateLighthouseInfo }) => {
  const [loading, setLoading] = useState(false);
  const [runtimeError, setRuntimeError] = useState({});

  const submitCallback = async () => {
    setRuntimeError({});
    setLoading(true);
    let lhr;
    try {
      const url = inputs[LIGHTHOUSE_URL];
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

      updateLighthouseInfo({
        metrics,
        screenshotDetails
      });
    } catch (error) {
      console.log('[LighthouseAction submitCallback] error => ', error);
      updateLighthouseInfo({
        metrics: {},
        screenshotDetails: {}
      });
    }

    if (lhr.runtimeError) {
      setRuntimeError(lhr.runtimeError);
    }

    setLoading(false);
  };

  const { inputs, inputChangeHandler, onSubmitHandler } = useForm(submitCallback);
  
  return (
    <div className='lighthouse-action'>
      {runtimeError.message && <p className='annotation'>{runtimeError.message}</p>}
      <form
        className='url-and-analyze'
        onSubmit={onSubmitHandler}>
        {/* TODO: url making behavior as PageSpeed Insights does */}
        <TextField
          id='url'
          type='url'
          pattern='^(http|https)://.*'
          required
          name={LIGHTHOUSE_URL}
          inputMode='url'
          value={inputs[LIGHTHOUSE_URL]}
          onChange={inputChangeHandler}
          placeholder='Enter a web page URL'
          aria-label='Enter a web page URL' />
        <ContainedButton
          loading={loading}
          type='submit'
          className='analyze-submit'>
          Analyze
        </ContainedButton>
      </form>
    </div>
  );
};

export default LighthouseAction;
