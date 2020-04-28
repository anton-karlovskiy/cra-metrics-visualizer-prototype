
import React from 'react';

import './text-field.css';

const TextField = ({ className, ...rest }) => (
  <input
    {...rest}
    className={`text-field ${className}`} />
);

export default TextField;
