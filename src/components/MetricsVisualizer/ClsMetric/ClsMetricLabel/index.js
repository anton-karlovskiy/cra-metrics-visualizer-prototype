
import React from 'react';

import VerticalBar from 'components/UI/VerticalBar';
import { METRICS } from 'utils/constants';
import { DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE } from 'utils/styling';
import './cls-metric-label.css';

const ClsMetricLabel = ({ clsMetric }) => {
  const targetMetric = Object.values(METRICS).find(item => item.ID === clsMetric.id);

  return (
    <VerticalBar
      width={1}
      height={DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE}
      color={targetMetric.COLOR}
      className='cls-vertical-bar'>
      <div className='cls-vertical-bar-inside'>
        <div
          style={{
            backgroundColor: `var(${targetMetric.COLOR})`,
            position: 'absolute',
            top: `${DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE}px`,
            transform: 'translate(-50%, 0)'
          }}
          className='cls-metric-label'>
          {`${targetMetric.TITLE}: ${Math.floor(clsMetric.displayValue)}`}
        </div>
      </div>
    </VerticalBar>
  )
};

export default ClsMetricLabel;
