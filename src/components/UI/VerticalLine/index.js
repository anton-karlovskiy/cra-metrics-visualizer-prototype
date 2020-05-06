
import React from 'react';

const VerticalLine = ({
  width = 2,
  height = 50,
  color = '--palette-common-black',
  style = {},
  ...rest
}) => (
  <div style={{
    borderLeft: `${width}px solid var(${color})`,
    height: `${height}px`,
    ...style
  }}
  {...rest} />
);

export default VerticalLine;
