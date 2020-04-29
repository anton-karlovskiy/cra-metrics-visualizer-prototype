
import React from 'react';

import './aspect-ratio-box.css';

const AspectRatioBox = ({
  children,
  aspectRatio = 1,
  ...rest
}) => (
  <div
    {...rest}
    style={{paddingTop: `${1 / aspectRatio * 100}%`}}
    className='aspect-ratio-box'>
    <div className='aspect-ratio-box-inside'>
      {children}
    </div>
  </div>
);

export default AspectRatioBox;
