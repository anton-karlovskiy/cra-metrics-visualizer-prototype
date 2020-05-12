/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { memo, useMemo } from 'react';

import Filmstrips from './Filmstrips';
import Timeline from './Timeline';
import ClsMetric from './ClsMetric';
import StrategySwitch from './StrategySwitch';
import Error from 'components/Error';
import { METRICS } from 'utils/constants';
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
  const timingMetrics = useMemo(() => Object.values(metrics).filter(metric => !excludedMetrics.includes(metric.id)), [metrics]);
  const clsMetric = metrics[METRICS.CUMULATIVE_LAYOUT_SHIFT.ID];

  return (
    <div className='metrics-visualizer'>
      <StrategySwitch
        disabled={loading}
        inputs={inputs}
        inputChange={inputChange} />
      <div className='metrics-visualizer-inside'>
        <Error
          className='metrics-visualizer-error'
          error={runtimeError} />
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
            finalScreenshot={finalScreenshot}
            style={{
              padding: `${DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE}px ${METRICS_VISUALIZER_CLS_SIDE_PADDING}px`,
              width: `calc((100% - ${METRICS_VISUALIZER_TIMING_SIDE_PADDING}px * 2 - ${METRICS_VISUALIZER_CLS_SIDE_PADDING}px * 2) / ${screenshotDetails.items.length + 1} + ${METRICS_VISUALIZER_CLS_SIDE_PADDING}px * 2)`
            }} />
        )}
      </div>
    </div>
  );
};

export default memo(MetricsVisualizer);
