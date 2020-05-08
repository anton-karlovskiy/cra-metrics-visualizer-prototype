
import React from 'react';

import Filmstrips from './Filmstrips';
import Timeline from './Timeline';
import Error from './Error';
import './metrics-visualizer.css';

const DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE = 120;

// TODO: could be lazy-loaded but what pattern?
const MetricsVisualizer = ({
  runtimeError = {},
  lighthouseInfo: {
    metrics = {},
    screenshotDetails = {}
  } = {}
}) => (
  <div className='metrics-visualizer'>
    <Error error={runtimeError} />
    <Filmstrips
      style={{padding: `${DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE}px 0`}}
      screenshotDetails={screenshotDetails} />
    <Timeline
      scale={screenshotDetails.scale}
      distanceBetweenFilmstripsAndTimeline={DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE}
      metrics={metrics} />
  </div>
);

export default MetricsVisualizer;
