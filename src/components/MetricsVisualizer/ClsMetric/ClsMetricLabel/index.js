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
import { DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE } from 'utils/styling';
import './cls-metric-label.css';

const ClsMetricLabel = ({
  className,
  clsMetric
}) => {
  const targetMetric = useMemo(() => Object.values(METRICS).find(item => item.ID === clsMetric.id), [clsMetric]);

  return (
    <VerticalBar
      width={1}
      height={DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE}
      color={targetMetric.COLOR}
      className={className}>
      <div className='cls-vertical-bar-inside'>
        <div
          style={{
            backgroundColor: `var(${targetMetric.COLOR})`,
            position: 'absolute',
            top: `${DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE}px`,
            transform: 'translate(-50%, 0)'
          }}
          className='cls-metric-label-text font-weight-bold'>
          {`${targetMetric.TITLE}: ${clsMetric.displayValue}`}
        </div>
      </div>
    </VerticalBar>
  )
};

export default ClsMetricLabel;
