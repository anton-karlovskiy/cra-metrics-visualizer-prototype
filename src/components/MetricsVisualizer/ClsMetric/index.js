
import React from 'react';

import AspectRatioBox from 'components/UI/AspectRatioBox';
import ClsMetricLabel from './ClsMetricLabel';
import './cls-metric.css';

const ClsMetric = ({
  clsMetric,
  filmstrip,
  style
}) => (
  <div
    style={style}
    className='cls-metric'>
    <AspectRatioBox aspectRatio={filmstrip.intrinsicWidth / filmstrip.intrinsicHeight}>
      <img
        width='100%'
        height='100%'
        src={filmstrip.details && filmstrip.details.data}
        alt='Cumulative Layout Shift Filmstrip' />
    </AspectRatioBox>
    <ClsMetricLabel clsMetric={clsMetric} />
  </div>
);

export default ClsMetric;
