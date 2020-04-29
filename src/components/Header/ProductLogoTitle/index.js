
import React from 'react';

import { LOGO_URL, APP_NAME } from 'utils/constants';
import './product-logo-title.css';

const ProductLogoTitle = () => (
  <div className='product-logo-title'>
    <a
      href='/'
      className='product-link'
      data-label='Project Logo (header)'>
      <img
        src={LOGO_URL}
        className='product-logo'
        alt='PageSpeed Metrics Visualizer' />
    </a>
    <a
      href='/'
      className='product-title'
      data-label='Upper Header'>
      {APP_NAME}
    </a>
  </div>
);

export default ProductLogoTitle;
