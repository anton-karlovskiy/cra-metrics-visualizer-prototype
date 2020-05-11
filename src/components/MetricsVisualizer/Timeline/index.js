
import React from 'react';

import MetricLabel from './MetricLabel';
import { METRICS } from 'utils/constants';
import './timeline.css';

// TODO: metrics to be excluded
const excludedMetrics = [METRICS.FIRST_INPUT_DELAY.ID];

const Timeline = ({
  scale,
  metrics,
  distanceBetweenFilmstripsAndTimeline
}) => {
  const validMetrics = Object.values(metrics).filter(metric => !excludedMetrics.includes(metric.id));

  return (
    <div className='timeline'>
      {validMetrics.map((metric, index) => (
        <MetricLabel
          key={metric.id}
          scale={scale}
          sequenceIndex={index}
          distanceBetweenFilmstripsAndTimeline={distanceBetweenFilmstripsAndTimeline}
          metric={metric} />
      ))}
    </div>
  );
};

export default Timeline;
