
import React, { useState } from 'react';

import ContainedButton from 'components/UI/ContainedButton';
import TextField from 'components/UI/TextField';
import useForm from 'utils/hooks/use-form';
import { getImageDimensions } from 'utils/helpers';
import { METRICS, LIGHTHOUSE_ENDPOINT, STRATEGY } from 'utils/constants';
import './psi-action.css';

const PSI_URL = 'psi-url';

const PsiAction = ({ updateLighthouseInfo }) => {
  const [loading, setLoading] = useState(false);

  const submitCallback = async () => {
    setLoading(true);
    try {
      const url = inputs[PSI_URL];
      const strategy = STRATEGY.MOBILE; // TODO: should be a toggle
      const lighthouseEndpoint = `http://localhost:5000${LIGHTHOUSE_ENDPOINT}?url=${url}&strategy=${strategy}`; // TODO: fix url
      const response = await fetch(lighthouseEndpoint);
      const lhr = await response.json();

      // ray test touch <
      console.log('ray : ***** lhr => ', lhr);
      console.log('ray : ***** finalScreenshot => ', lhr.audits['final-screenshot']);
      // ray test touch >

      const metrics = {
        [METRICS.FIRST_BYTE.ID]: lhr.audits[METRICS.FIRST_BYTE.ID],
        [METRICS.FIRST_CONTENTFUL_PAINT.ID]: lhr.audits[METRICS.FIRST_CONTENTFUL_PAINT.ID],
        [METRICS.FIRST_INPUT_DELAY.ID]: lhr.audits[METRICS.FIRST_INPUT_DELAY.ID],
        [METRICS.SPEED_INDEX.ID]: lhr.audits[METRICS.SPEED_INDEX.ID],
        [METRICS.TIME_TO_INTERACTIVE.ID]: lhr.audits[METRICS.TIME_TO_INTERACTIVE.ID]
      };
      
      const screenshotDetails = lhr.audits['screenshot-thumbnails'].details;
      // ray test touch <
      console.log('ray : ***** metrics, screenshotDetails => ', metrics, screenshotDetails);
      // ray test touch >
      const dimensions = await getImageDimensions(screenshotDetails.items[0].data);
      screenshotDetails.intrinsicWidth = dimensions.width;
      screenshotDetails.intrinsicHeight = dimensions.height;

      updateLighthouseInfo({
        metrics,
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
