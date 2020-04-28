
import React from 'react';

import './psi-action.css';

const PsiAction = () => {
  return (
    <div className='psi-action'>
      <form>
        <div className='url-and-analyze'>
          <input
            id='url'
            type='text'
            name='url'
            inputMode='url'
            placeholder='Enter a web page URL'
            aria-label='Enter a web page URL' />
          <button
            className='analyze-submit'
            type='button'>
            Analyze
          </button>
        </div>
      </form>
    </div>
  );
};

export default PsiAction;
