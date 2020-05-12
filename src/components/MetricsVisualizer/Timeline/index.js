
import React, { useMemo } from 'react';

import MetricLabel from './MetricLabel';
import { METRICS } from 'utils/constants';
import { METRIC_LABEL } from 'utils/styling';
import './timeline.css';

const Timeline = ({
  scale,
  metrics
}) => {
  const ttiMetric = useMemo(() => metrics.find(metric => metric.id === METRICS.TIME_TO_INTERACTIVE.ID), [metrics]);
  const fcpMetric = useMemo(() => metrics.find(metric => metric.id === METRICS.FIRST_CONTENTFUL_PAINT.ID), [metrics]);

  return (
    <div
      style={{minHeight: `${metrics.length * (METRIC_LABEL.HEIGHT + METRIC_LABEL.VERTICAL_SPACING) - METRIC_LABEL.VERTICAL_SPACING}px`}}
      className='timeline'>
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

        return (
          <MetricLabel
            key={metric.id}
            hidden={metric.id === METRICS.TOTAL_BLOCKING_TIME.ID}
            barPos={barPos}
            sequenceIndex={index}
            metric={metric} />
        );
      })}
    </div>
  );
};

export default Timeline;
