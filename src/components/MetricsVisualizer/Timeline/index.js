
// ray test touch <
import React from 'react';

import MetricLabel from './MetricLabel';
import './timeline.css';

const Timeline = ({ performanceMetrics }) => {
  return (
    <div className='timeline'>
      {Object.values(performanceMetrics).map(performanceMetric => (
        <MetricLabel
          key={performanceMetric.id}
          performanceMetric={performanceMetric} />
      ))}
    </div>
  );
};

export default Timeline;
// ray test touch >
