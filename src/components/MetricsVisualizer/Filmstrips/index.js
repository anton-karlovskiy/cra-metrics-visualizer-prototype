
import React from 'react';

import { STRATEGY } from 'utils/constants';
import './filmstrips.css';

const FILMSTRIP_PADDING = 4;

const SIZE = {
  [STRATEGY.MOBILE]: {
    WIDTH: 120,
    HEIGHT: 192
  },
  [STRATEGY.DESKTOP]: {
    WIDTH: 120,
    HEIGHT: 192
  }
};

const Filmstrips = ({
  strategy = STRATEGY.MOBILE, // TODO: remove default value
  details: {
    items = []
  } = {}
}) => (
  <div className='filmstrips'>
    {items.map(item => (
      <div
        key={item.timing}
        style={{padding: `${FILMSTRIP_PADDING}px`}}>
        <img
          src={item.data}
          width={SIZE[strategy].WIDTH}
          height={SIZE[strategy].HEIGHT}
          alt='Performance Filmstrip' />
      </div>
    ))}
  </div>
);

export default Filmstrips;
