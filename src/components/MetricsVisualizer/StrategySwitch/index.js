
import React from 'react';

import Switch from 'components/UI/Switch';
import { STRATEGY, INPUT_NAMES } from 'utils/constants';
import './strategy-switch.css';

const StrategySwitch = ({
  disabled,
  inputs,
  inputChange
}) => (
  <div className='strategy-switch'>
    <span className='strategy-label mobile'>
      {STRATEGY.MOBILE}
    </span>
    <Switch
      disabled={disabled}
      name={INPUT_NAMES.IS_DESKTOP_STRATEGY}
      checked={inputs[INPUT_NAMES.IS_DESKTOP_STRATEGY]}
      onChange={inputChange} />
    <span className='strategy-label desktop'>
      {STRATEGY.DESKTOP}
    </span>
  </div>
);

export default StrategySwitch;
