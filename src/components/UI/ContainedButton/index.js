
import React from 'react';

import './contained-button.css';

const ContainedButton = ({ className, type, ...rest }) => (
  <button
    {...rest}
    className={`contained-button ${className}`}
    type={type || 'button'}>
    Analyze
  </button>
);

export default ContainedButton;
