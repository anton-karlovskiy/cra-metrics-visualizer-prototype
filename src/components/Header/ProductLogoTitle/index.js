
import React from 'react';

import { logoUrl, appName } from 'utils/constants';
import './product-logo-title.css';

const ProductLogoTitle = () => (
  <div className='product-logo-title'>
    <a
      href='/'
      className='product-link'
      data-label='Project Logo (header)'>
      <img
        src={logoUrl}
        className='product-logo'
        alt='PageSpeed Metrics Visualizer' />
    </a>
    <a
      href='/'
      className='product-title'
      data-label='Upper Header'>
      {appName}
    </a>
  </div>
);

export default ProductLogoTitle;
