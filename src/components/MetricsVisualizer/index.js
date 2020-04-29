
import React from 'react';

import Filmstrips from './Filmstrips';
import Timeline from './Timeline';
import './metrics-visualizer.css';

// TODO: could be lazy-loaded but what pattern?
const MetricsVisualizer = ({
  lighthouseInfo: {
    metrics = {},
    screenshotDetails = {}
  } = {}
}) => (
  <div className='metrics-visualizer'>
    <Filmstrips screenshotDetails={screenshotDetails} />
    <Timeline metrics={metrics} />
  </div>
);

export default MetricsVisualizer;
