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

import React from 'react';

import AspectRatioBox from 'components/UI/AspectRatioBox';
import ClsMetricLabel from './ClsMetricLabel';
import TopMomentAnnotation from 'components/MetricsVisualizer/Timeline/TopMomentBanner/TopMomentAnnotation';
import { DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE } from 'utils/styling';
import './cls-metric.css';

const ClsMetric = ({
  clsMetric,
  finalScreenshot = {},
  style
}) => (
  <div
    style={style}
    className='cls-metric'>
    <TopMomentAnnotation
      style={{
        position: 'absolute',
        top: `${DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE / 2}px`,
        transform: 'translate(-50%, -50%)',
        color: 'var(--palette-common-white)',
        left: '50%'
      }}
      text='Was layout stable?' />
    <AspectRatioBox aspectRatio={finalScreenshot.intrinsicWidth / finalScreenshot.intrinsicHeight}>
      <img
        width='100%'
        height='100%'
        src={finalScreenshot.details && finalScreenshot.details.data}
        alt='Cumulative Layout Shift Filmstrip' />
    </AspectRatioBox>
    <ClsMetricLabel
      className='cls-metric-label'
      clsMetric={clsMetric} />
  </div>
);

export default ClsMetric;
