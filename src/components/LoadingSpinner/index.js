
import React from 'react';

import './loading-spinner.css';

const LoadingSpinner = ({
  width = 10,
  height = 10,
  margin = 60,
  borderWidth = 1.1
}) => (
  <div
    style={{
      width: `${width}em`,
      height: `${height}em`,
      margin: `${margin}px auto`,
      borderWidth: `${borderWidth}em`
    }}
    className='loader'>Loading...</div>
);

export default LoadingSpinner
