
import React from 'react';

import './filmstrips.css';

const FILMSTRIP_PADDING = 4;

const Filmstrips = ({
  details: {
    items = [],
    intrinsicWidth,
    intrinsicHeight
  } = {}
}) => (
  <div className='filmstrips'>
    {items.map(item => (
      <div
        key={item.timing}
        style={{padding: `${FILMSTRIP_PADDING}px`}}>
        <img
          src={item.data}
          width={intrinsicWidth}
          height={intrinsicHeight}
          alt='Performance Filmstrip' />
      </div>
    ))}
  </div>
);

export default Filmstrips;
