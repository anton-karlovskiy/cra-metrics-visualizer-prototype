
import React from 'react';

import ContainedButton from 'components/UI/ContainedButton';
import TextField from 'components/UI/TextField';
import { INPUT_NAMES } from 'utils/constants';
import './lighthouse-action.css';

const LighthouseAction = ({
  loading,
  inputs,
  onSubmit,
  inputChange
}) => (
  <div className='lighthouse-action'>
    <form
      className='url-and-analyze'
      onSubmit={onSubmit}>
      <TextField
        id='url'
        type='url'
        pattern='^(http|https)://.*'
        required
        name={INPUT_NAMES.LIGHTHOUSE_URL}
        inputMode='url'
        value={inputs[INPUT_NAMES.LIGHTHOUSE_URL]}
        onChange={inputChange}
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

export default LighthouseAction;
