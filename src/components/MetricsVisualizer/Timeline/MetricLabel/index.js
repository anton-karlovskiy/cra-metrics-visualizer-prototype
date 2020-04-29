
// ray test touch <
import React from 'react';

import { PERF_METRICS } from 'utils/constants';
import './metric-label.css';

const MetricLabel = ({ performanceMetric }) => {
  const targetPerfMetric = Object.values(PERF_METRICS).find(perfMetric => perfMetric.ID === performanceMetric.id);

  return (
    <div
      style={{backgroundColor: `var(${targetPerfMetric.COLOR})`}}
      className='metric-label'>
      {targetPerfMetric.LABEL}
    </div>
  );
};

export default MetricLabel;
// ray test touch >
