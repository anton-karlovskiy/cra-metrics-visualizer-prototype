
import React, { useMemo } from 'react';

import VerticalBar from 'components/UI/VerticalBar';
import { METRICS } from 'utils/constants';
import { METRIC_LABEL, DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE } from 'utils/styling';
import './metric-label.css';

const MetricLabel = ({
  metric,
  sequenceIndex,
  hidden,
  barPos
}) => {
  const targetMetric = useMemo(() => Object.values(METRICS).find(item => item.ID === metric.id), [metric]);
  const topOffset = sequenceIndex * (METRIC_LABEL.HEIGHT + METRIC_LABEL.VERTICAL_SPACING);
  const barHeight = topOffset + DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE;

  // TODO: some websites throw errors e.g. upwork.com & twitter.com
  if (metric.errorMessage) {
    console.log('[MetricLabel] metric error => ', metric.errorMessage);
    return null;
  }

  return (
    <VerticalBar
      width={hidden ? 0 : 1}
      height={barHeight}
      color={targetMetric.COLOR}
      style={{
        position: 'absolute',
        top: `-${DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE}px`,
        left: `${barPos}%`,
        zIndex: `-${sequenceIndex}`
      }}>
      <div className='vertical-bar-inside'>
        <div
          style={{
            backgroundColor: `var(${targetMetric.COLOR})`,
            height: `${METRIC_LABEL.HEIGHT}px`,
            position: 'absolute',
            top: `${barHeight}px`,
            right: '-20px',
            zIndex: `-${sequenceIndex}`
          }}
          className='metric-label'>
          {`${targetMetric.TITLE}: ${Math.floor(metric.numericValue)}ms`}
        </div>
      </div>
    </VerticalBar>
  );
};

export default MetricLabel;
