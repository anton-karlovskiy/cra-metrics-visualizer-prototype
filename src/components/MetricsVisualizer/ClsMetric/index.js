
// ray test touch <
import React from 'react';

import AspectRatioBox from 'components/UI/AspectRatioBox';

const ClsMetric = ({
  clsMetric,
  filmstrip,
  className,
  style
}) => {
  console.log('ray : ***** clsMetric => ', clsMetric);
  
  return (
    <div
      style={style}
      className={className}>
      <AspectRatioBox aspectRatio={filmstrip.intrinsicWidth / filmstrip.intrinsicHeight}>
        <img
          width='100%'
          height='100%'
          src={filmstrip.details && filmstrip.details.data}
          alt='Cumulative Layout Shift Filmstrip' />
      </AspectRatioBox>
    </div>
  );
};

export default ClsMetric;
// ray test touch >
