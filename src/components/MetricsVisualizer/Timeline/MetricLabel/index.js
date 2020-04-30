
import React from 'react';

import VerticalLine from 'components/UI/VerticalLine';
import { METRICS } from 'utils/constants';
import './metric-label.css';

const METRIC_LABEL = {
  HEIGHT: 36,
  VERTICAL_SPACING: 4
};

const MetricLabel = ({
  metric,
  sequenceNumber,
  distanceBetweenFilmstripsAndTimeline
}) => {
  const targetMetric = Object.values(METRICS).find(item => item.ID === metric.id);
  const topOffset = sequenceNumber * (METRIC_LABEL.HEIGHT + METRIC_LABEL.VERTICAL_SPACING);

  return (
    <div
      style={{
        backgroundColor: `var(${targetMetric.COLOR})`,
        height: `${METRIC_LABEL.HEIGHT}px`,
        top: `${topOffset}px`,
        left: `${sequenceNumber * 12}%` // TODO: hardcoded
      }}
      className='metric-label'>
      <div className='metric-label-inside'>
        {targetMetric.LABEL}
        <VerticalLine
          width={1}
          height={topOffset + distanceBetweenFilmstripsAndTimeline}
          color={targetMetric.COLOR}
          style={{
            position: 'absolute',
            right: '20%',
            bottom: `${METRIC_LABEL.HEIGHT}px`
          }} />
      </div>
    </div>
  );
};

export default MetricLabel;
