
import React, { useState } from 'react';

import ContainedButton from 'components/UI/ContainedButton';
import TextField from 'components/UI/TextField';
import useForm from 'utils/hooks/use-form';
import { getImageDimensions } from 'utils/helpers';
import './psi-action.css';

const PSI_URL = 'psi-url';

const PsiAction = () => {
  const [loading, setLoading] = useState(false);

  const submitCallback = async () => {
    setLoading(true);
    try {
      const url = inputs[PSI_URL];
      const stragegy = 'mobile'; // TODO: should be a toggle
      const psiEndpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&strategy=${stragegy}`;
      const response = await fetch(psiEndpoint);
      const responseJson = await response.json();
      const lighthouse = responseJson.lighthouseResult;

      // TODO: constants
      const lighthouseMetrics = {
        'First Byte': lighthouse.audits['time-to-first-byte'].displayValue,
        'First Contentful Paint': lighthouse.audits['first-contentful-paint'].displayValue,
        'First Input Delay': lighthouse.audits['max-potential-fid'].displayValue,
        'Speed Index': lighthouse.audits['speed-index'].displayValue,
        'Time To Interactive': lighthouse.audits['interactive'].displayValue
      };
      
      const screenshotsDetails = lighthouse.audits['screenshot-thumbnails'].details;
      
      let items = [];
      for (const item of screenshotsDetails.items) {
        const dimensions = await getImageDimensions(item.data);

        items = [
          ...items, {
            ...item,
            ...dimensions
          }
        ];
      }

      screenshotsDetails.items = items;
      
      console.log('ray : ***** lighthouseMetrics, screenshotsDetails => ', lighthouseMetrics, screenshotsDetails);
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
