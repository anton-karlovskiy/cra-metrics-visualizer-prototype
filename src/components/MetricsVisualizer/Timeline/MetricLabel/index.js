
import React from 'react';

import { METRICS } from 'utils/constants';
import './metric-label.css';

const METRIC_LABEL = {
  HEIGHT: 36,
  VERTICAL_SPACING: 4
};

const MetricLabel = ({ metric, sequenceNumber }) => {
  const targetMetric = Object.values(METRICS).find(item => item.ID === metric.id);

  return (
    <div
      style={{
        backgroundColor: `var(${targetMetric.COLOR})`,
        height: `${METRIC_LABEL.HEIGHT}px`,
        top: `${sequenceNumber * (METRIC_LABEL.HEIGHT + METRIC_LABEL.VERTICAL_SPACING)}px`,
        left: `${sequenceNumber * 12}%`
      }}
      className='metric-label'>
      {targetMetric.LABEL}
    </div>
  );
};

export default MetricLabel;
