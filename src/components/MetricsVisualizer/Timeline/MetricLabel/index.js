
import React from 'react';

import VerticalLine from 'components/UI/VerticalLine';
import { METRICS } from 'utils/constants';
import './metric-label.css';

const METRIC_LABEL = {
  HEIGHT: 36,
  VERTICAL_SPACING: 4
};

const MetricLabel = ({
  scale,
  metric,
  sequenceNumber,
  distanceBetweenFilmstripsAndTimeline
}) => {
  const targetMetric = Object.values(METRICS).find(item => item.ID === metric.id);
  const topOffset = sequenceNumber * (METRIC_LABEL.HEIGHT + METRIC_LABEL.VERTICAL_SPACING);
  const lineHeight = topOffset + distanceBetweenFilmstripsAndTimeline;

  // TODO: some websites throw errors e.g. upwork.com & twitter.com
  if (metric.error) {
    return null;
  }

  return (
    <VerticalLine
      width={1}
      height={lineHeight}
      color={targetMetric.COLOR}
      style={{
        position: 'absolute',
        top: `-${distanceBetweenFilmstripsAndTimeline}px`,
        left: `${(metric.numericValue / scale * 100).toFixed(2)}%`,
        zIndex: `-${sequenceNumber}`
      }}>
      <div className='vertical-line-inside'>
        <div
          style={{
            backgroundColor: `var(${targetMetric.COLOR})`,
            height: `${METRIC_LABEL.HEIGHT}px`,
            position: 'absolute',
            top: `${lineHeight}px`,
            right: '-20px',
            zIndex: `-${sequenceNumber}`
          }}
          className='metric-label'>
          {`${targetMetric.LABEL}: ${Math.floor(metric.numericValue)}ms`}
        </div>
      </div>
    </VerticalLine>
  );
};

export default MetricLabel;
