
import React from 'react';

import './switch.css';

const Switch = ({
  className,
  name,
  checked = false,
  onChange,
  ...rest
}) => (
  <label className={`switch ${className}`}>
    <input
      type='checkbox'
      name={name}
      checked={checked}
      onChange={onChange}
      {...rest} />
    <span className='slider round'></span>
  </label>
);

export default Switch;
