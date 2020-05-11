
import React from 'react';

import Filmstrips from './Filmstrips';
import Timeline from './Timeline';
import Error from 'components/Error';
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
    <div className='metrics-visualizer-inside'>
      <Error error={runtimeError} />
      <Filmstrips
        style={{padding: `${DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE}px 0`}}
        screenshotDetails={screenshotDetails} />
      <Timeline
        scale={screenshotDetails.scale}
        distanceBetweenFilmstripsAndTimeline={DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE}
        metrics={metrics} />
    </div>
  </div>
);

export default MetricsVisualizer;
