
import React from 'react';

import MetricLabel from './MetricLabel';
import './timeline.css';

const Timeline = ({ metrics }) => {
  return (
    <div className='timeline'>
      {Object.values(metrics).map((metric, index) => (
        <MetricLabel
          key={metric.id}
          sequenceNumber={index}
          metric={metric} />
      ))}
    </div>
  );
};

export default Timeline;
