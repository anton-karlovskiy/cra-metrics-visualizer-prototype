
import React from 'react';

import VerticalLine from 'components/UI/VerticalLine';
import { METRICS } from 'utils/constants';
import './metric-label.css';

const METRIC_LABEL = {
  HEIGHT: 36,
  VERTICAL_SPACING: 4
};

const MetricLabel = ({
  scale,
  metric,
  sequenceNumber,
  distanceBetweenFilmstripsAndTimeline
}) => {
  const targetMetric = Object.values(METRICS).find(item => item.ID === metric.id);
  const topOffset = sequenceNumber * (METRIC_LABEL.HEIGHT + METRIC_LABEL.VERTICAL_SPACING);

  // ray test touch <
  if (metric.id === METRICS.FIRST_INPUT_DELAY.ID) {
    return null;
  }

  if (metric.error) {
    return null;
  }
  // ray test touch >

  return (
    <div
      style={{
        backgroundColor: `var(${targetMetric.COLOR})`,
        height: `${METRIC_LABEL.HEIGHT}px`,
        top: `${topOffset}px`,
        left: `${(metric.numericValue / scale * 100).toFixed(2)}%`
      }}
      className='metric-label'>
      <div className='metric-label-inside'>
        {`${targetMetric.LABEL}: ${Math.floor(metric.numericValue)}ms`}
        <VerticalLine
          width={1}
          height={topOffset + distanceBetweenFilmstripsAndTimeline}
          color={targetMetric.COLOR}
          style={{
            position: 'absolute',
            left: 0,
            bottom: `${METRIC_LABEL.HEIGHT}px`
          }} />
      </div>
    </div>
  );
};

export default MetricLabel;
