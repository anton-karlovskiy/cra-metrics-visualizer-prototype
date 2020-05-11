
import React from 'react';

import MetricLabel from './MetricLabel';
import './timeline.css';

const Timeline = ({
  scale,
  metrics
}) => (
  <div className='timeline'>
    {metrics.map((metric, index) => (
      <MetricLabel
        key={metric.id}
        scale={scale}
        sequenceIndex={index}
        metric={metric} />
    ))}
  </div>
);

export default Timeline;
