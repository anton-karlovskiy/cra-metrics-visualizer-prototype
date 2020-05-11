
import React, { memo } from 'react';

import './error.css';

const Error = ({ error = {} }) => (
  <p className='error'>{error.message}</p>
);

export default memo(Error);
