
import React from 'react';

import Filmstrips from './Filmstrips';

// TODO: could be lazy-loaded but what pattern?
const MetricsVisualizer = ({
  lighthouseInfo: {
    performanceMetrics = {},
    screenshotDetails = {}
  } = {}
}) => (
  <>
    <Filmstrips details={screenshotDetails} />
  </>
);

export default MetricsVisualizer;
