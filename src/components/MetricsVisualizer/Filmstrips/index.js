
import React from 'react';

import AspectRatioBox from 'components/UI/AspectRatioBox';
import './filmstrips.css';

const FILMSTRIP_PADDING = 8;

const Filmstrips = ({
  details: {
    items = [],
    intrinsicWidth,
    intrinsicHeight
  } = {}
}) => (
  <div className='filmstrips'>
    {items.map((item, index) => (
      <div
        key={item.timing}
        style={{
          marginRight: `${FILMSTRIP_PADDING}px`,
          marginLeft: index === 0 ? `${FILMSTRIP_PADDING}px` : 0
        }}>
        <AspectRatioBox aspectRatio={intrinsicWidth / intrinsicHeight}>
          <img
            width='100%'
            height='100%'
            src={item.data}
            alt='Performance Filmstrip' />
        </AspectRatioBox>
      </div>
    ))}
  </div>
);

export default Filmstrips;
