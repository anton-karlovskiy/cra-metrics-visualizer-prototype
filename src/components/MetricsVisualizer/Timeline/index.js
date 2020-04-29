
import React from 'react';

import MetricLabel from './MetricLabel';
import './timeline.css';

const Timeline = ({ performanceMetrics }) => {
  return (
    <div className='timeline'>
      {Object.values(performanceMetrics).map((performanceMetric, index) => (
        <MetricLabel
          key={performanceMetric.id}
          // ray test touch <
          sequenceNumber={index}
          // ray test touch >
          performanceMetric={performanceMetric} />
      ))}
    </div>
  );
};

export default Timeline;
