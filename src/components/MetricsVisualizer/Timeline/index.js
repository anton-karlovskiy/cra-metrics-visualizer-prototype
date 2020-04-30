
import React from 'react';

import MetricLabel from './MetricLabel';
import './timeline.css';

const Timeline = ({ metrics, distanceBetweenFilmstripsAndTimeline }) => (
  <div className='timeline'>
    {Object.values(metrics).map((metric, index) => (
      <MetricLabel
        key={metric.id}
        sequenceNumber={index}
        distanceBetweenFilmstripsAndTimeline={distanceBetweenFilmstripsAndTimeline}
        metric={metric} />
    ))}
  </div>
);

export default Timeline;
