
import React from 'react';

import MetricLabel from './MetricLabel';
import './timeline.css';

const Timeline = ({
  scale,
  metrics,
  distanceBetweenFilmstripsAndTimeline
}) => (
  <div className='timeline'>
    {Object.values(metrics).map((metric, index) => (
      <MetricLabel
        key={metric.id}
        scale={scale}
        sequenceNumber={index}
        distanceBetweenFilmstripsAndTimeline={distanceBetweenFilmstripsAndTimeline}
        metric={metric} />
    ))}
  </div>
);

export default Timeline;
