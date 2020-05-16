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

import MetricLabel from './MetricLabel';
import BottomMomentBanner from './BottomMomentBanner';
// ray test touch <
import TopMomentBanner from './TopMomentBanner';
// ray test touch >
import { METRICS } from 'utils/constants';
import {
  METRIC_LABEL_TEXT,
  DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE
} from 'utils/styling';
import './timeline.css';

const Timeline = ({
  scale,
  metrics
}) => {
  const ttiMetric = useMemo(() => metrics.find(metric => metric.id === METRICS.TIME_TO_INTERACTIVE.ID), [metrics]) || {};
  const fcpMetric = useMemo(() => metrics.find(metric => metric.id === METRICS.FIRST_CONTENTFUL_PAINT.ID), [metrics]) || {};
  const siMetric = useMemo(() => metrics.find(metric => metric.id === METRICS.SPEED_INDEX.ID), [metrics]) || {};
  // TODO: it should be First Paint instead of First Byte
  const fbMetric = useMemo(() => metrics.find(metric => metric.id === METRICS.FIRST_BYTE.ID), [metrics]) || {};

  const happeningMomentPos = fbMetric.numericValue / scale * 100;
  const usefulMomentPos = (siMetric.numericValue + fcpMetric.numericValue) / 2 / scale * 100;
  const usableMomentPos = ttiMetric.numericValue / scale * 100;
  const lineLeft = isNaN(happeningMomentPos) ? usefulMomentPos : happeningMomentPos;
  const lineRight = 100 - (isNaN(usableMomentPos) ? usefulMomentPos : usableMomentPos);

  return (
    <>
      <div
        style={{minHeight: `${metrics.length * (METRIC_LABEL_TEXT.HEIGHT + METRIC_LABEL_TEXT.VERTICAL_SPACING) - METRIC_LABEL_TEXT.VERTICAL_SPACING}px`}}
        className='metric-labels'>
        {metrics.map((metric, index) => {
          let barPos;
          switch (metric.id) {
            case METRICS.FIRST_BYTE.ID:
            case METRICS.FIRST_CONTENTFUL_PAINT.ID:
            case METRICS.LARGEST_CONTENTFUL_PAINT.ID:
            case METRICS.SPEED_INDEX.ID:
            case METRICS.TIME_TO_INTERACTIVE.ID:
              barPos = (metric.numericValue / scale * 100).toFixed(2);
              break;
            case METRICS.TOTAL_BLOCKING_TIME.ID:
              barPos = ((ttiMetric.numericValue + fcpMetric.numericValue) / 2 / scale * 100).toFixed(2);
              break;
            default: break;
          }

          const topOffset = index * (METRIC_LABEL_TEXT.HEIGHT + METRIC_LABEL_TEXT.VERTICAL_SPACING);
          const barHeight = topOffset + DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE;

          return (
            <MetricLabel
              key={metric.id}
              style={{
                position: 'absolute',
                top: `-${DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE}px`,
                left: `${barPos}%`,
                zIndex: `-${index}`
              }}
              barHidden={metric.id === METRICS.TOTAL_BLOCKING_TIME.ID}
              barHeight={barHeight}
              metric={metric} />
          );
        })}
      </div>
      {/* ray test touch < */}
      <TopMomentBanner className='top-moment-banner' />
      {/* ray test touch > */}
      {scale && (
        <BottomMomentBanner
          lineLeft={lineLeft}
          lineRight={lineRight}
          happeningMomentPos={happeningMomentPos}
          usefulMomentPos={usefulMomentPos}
          usableMomentPos={usableMomentPos} />
      )}
    </>
  );
};

export default Timeline;
