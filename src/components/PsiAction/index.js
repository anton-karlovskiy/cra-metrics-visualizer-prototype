
import React, { useState } from 'react';

import ContainedButton from 'components/UI/ContainedButton';
import TextField from 'components/UI/TextField';
import useForm from 'utils/hooks/use-form';
import { getImageDimensions } from 'utils/helpers';
import { PERF_METRICS, PSI_ENDPOINT, STRATEGY } from 'utils/constants';
import './psi-action.css';

const PSI_URL = 'psi-url';

const PsiAction = ({ updateLighthouseInfo }) => {
  const [loading, setLoading] = useState(false);

  const submitCallback = async () => {
    setLoading(true);
    try {
      const url = inputs[PSI_URL];
      const stragegy = STRATEGY.MOBILE; // TODO: should be a toggle
      const psiEndpoint = `${PSI_ENDPOINT}?url=${url}&strategy=${stragegy}`;
      const response = await fetch(psiEndpoint);
      const responseJson = await response.json();
      const lighthouse = responseJson.lighthouseResult;

      const performanceMetrics = {
        [PERF_METRICS.FIRST_BYTE.LABEL]: lighthouse.audits[PERF_METRICS.FIRST_BYTE.KEY],
        [PERF_METRICS.FIRST_CONTENTFUL_PAINT.LABEL]: lighthouse.audits[PERF_METRICS.FIRST_CONTENTFUL_PAINT.KEY],
        [PERF_METRICS.FIRST_INPUT_DELAY.LABEL]: lighthouse.audits[PERF_METRICS.FIRST_INPUT_DELAY.KEY],
        [PERF_METRICS.SPEED_INDEX.LABEL]: lighthouse.audits[PERF_METRICS.SPEED_INDEX.KEY],
        [PERF_METRICS.TIME_TO_INTERACTIVE.LABEL]: lighthouse.audits[PERF_METRICS.TIME_TO_INTERACTIVE.KEY]
      };
      
      const screenshotDetails = lighthouse.audits['screenshot-thumbnails'].details;
      const dimensions = await getImageDimensions(screenshotDetails.items[0].data);
      screenshotDetails.intrinsicWidth = dimensions.width;
      screenshotDetails.intrinsicHeight = dimensions.height;

      // ray test touch <
      console.log('ray : ***** performanceMetrics, screenshotDetails => ', performanceMetrics, screenshotDetails);
      // ray test touch >
      updateLighthouseInfo({
        performanceMetrics,
        screenshotDetails
      });
      
    } catch (error) {
      console.log('[PsiAction submitCallback] error => ', error);
    }
    setLoading(false);
  };

  const { inputs, inputChangeHandler, onSubmitHandler } = useForm(submitCallback);
  
  return (
    <div className='psi-action'>
      <form
        className='url-and-analyze'
        onSubmit={onSubmitHandler}>
        {/* TODO: url making behavior as PageSpeed Insights does */}
        <TextField
          id='url'
          type='text'
          name={PSI_URL}
          inputMode='url'
          value={inputs[PSI_URL]}
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

export default PsiAction;
