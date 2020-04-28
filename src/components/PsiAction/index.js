
import React from 'react';

import ContainedButton from 'components/UI/ContainedButton';
import TextField from 'components/UI/TextField';
import './psi-action.css';

const PsiAction = () => {
  return (
    <div className='psi-action'>
      <form className='url-and-analyze'>
        <TextField
          id='url'
          type='text'
          name='url'
          inputMode='url'
          placeholder='Enter a web page URL'
          aria-label='Enter a web page URL' />
        <ContainedButton
          type='submit'
          className='analyze-submit'>
          Analyze
        </ContainedButton>
      </form>
    </div>
  );
};

export default PsiAction;
