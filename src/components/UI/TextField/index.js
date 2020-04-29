
import React from 'react';

import './text-field.css';

const TextField = ({ className, value = '', ...rest }) => (
  <input
    {...rest}
    value={value}
    className={`text-field ${className}`} />
);

export default TextField;
