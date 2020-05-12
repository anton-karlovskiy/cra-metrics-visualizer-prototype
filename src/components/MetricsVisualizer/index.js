
import React, { memo } from 'react';

import Filmstrips from './Filmstrips';
import Timeline from './Timeline';
import ClsMetric from './ClsMetric';
import StrategySwitch from './StrategySwitch';
import { METRICS } from 'utils/constants';
import Error from 'components/Error';
import {
  DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE,
  METRICS_VISUALIZER_TIMING_SIDE_PADDING,
  METRICS_VISUALIZER_CLS_SIDE_PADDING
} from 'utils/styling'
import './metrics-visualizer.css';

// TODO: metrics to be excluded
const excludedMetrics = [
  METRICS.FIRST_INPUT_DELAY.ID,
  METRICS.CUMULATIVE_LAYOUT_SHIFT.ID
];

const MetricsVisualizer = ({
  loading,
  inputs,
  inputChange,
  runtimeError = {},
  lighthouseInfo: {
    metrics = {},
    screenshotDetails = {},
    finalScreenshot = {}
  } = {}
}) => {
  const clsMetric = metrics[METRICS.CUMULATIVE_LAYOUT_SHIFT.ID];
  const timingMetrics = Object.values(metrics).filter(metric => !excludedMetrics.includes(metric.id));

  return (
    <div className='metrics-visualizer'>
      <StrategySwitch
        disabled={loading}
        inputs={inputs}
        inputChange={inputChange} />
      <div className='metrics-visualizer-inside'>
        <Error error={runtimeError} />  
        <div
          style={{padding: `0 ${METRICS_VISUALIZER_TIMING_SIDE_PADDING}px`}}
          className='metrics-visualizer-inside-timing'>
          <Filmstrips
            style={{padding: `${DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE}px 0`}}
            screenshotDetails={screenshotDetails} />
          <Timeline
            scale={screenshotDetails.scale}
            metrics={timingMetrics} />
        </div>
        {clsMetric && (
          <ClsMetric
            clsMetric={clsMetric}
            filmstrip={finalScreenshot}
            style={{
              padding: `${DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE}px ${METRICS_VISUALIZER_CLS_SIDE_PADDING}px`,
              width: `calc((100% - ${METRICS_VISUALIZER_TIMING_SIDE_PADDING}px * 2 - ${METRICS_VISUALIZER_CLS_SIDE_PADDING}px * 2) / 11 + ${METRICS_VISUALIZER_CLS_SIDE_PADDING}px * 2)`
            }} />
        )}
      </div>
    </div>
  );
};

export default memo(MetricsVisualizer);
