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

import React, { useMemo } from 'react';

import VerticalBar from 'components/UI/VerticalBar';
import { METRICS } from 'utils/constants';
import { METRIC_LABEL_TEXT } from 'utils/styling';
import './metric-label.css';

const MetricLabel = ({
  metric,
  barHidden,
  barHeight,
  style
}) => {
  const targetMetric = useMemo(() => Object.values(METRICS).find(item => item.ID === metric.id), [metric]);

  // TODO: some websites throw errors e.g. upwork.com & twitter.com
  if (metric.errorMessage) {
    console.log('[MetricLabel] metric error => ', metric.errorMessage);
    return null;
  }

  return (
    <VerticalBar
      width={barHidden ? 0 : 1}
      height={barHeight}
      color={targetMetric.COLOR}
      style={style}>
      <div className='vertical-bar-inside'>
        <div
          style={{
            backgroundColor: `var(${targetMetric.COLOR})`,
            height: `${METRIC_LABEL_TEXT.HEIGHT}px`,
            position: 'absolute',
            top: `${barHeight}px`,
            right: '-20px'
          }}
          className='metric-label-text'>
          {`${targetMetric.TITLE}: ${Math.floor(metric.numericValue)}ms`}
        </div>
      </div>
    </VerticalBar>
  );
};

export default MetricLabel;
