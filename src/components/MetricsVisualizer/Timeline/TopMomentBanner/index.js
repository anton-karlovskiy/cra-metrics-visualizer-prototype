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

import TopMomentAnnotation from './TopMomentAnnotation';
import './top-moment-banner.css';
import { DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE } from 'utils/styling';

const commonStyle = {
  position: 'absolute',
  top: `${DISTANCE_BETWEEN_FILMSTRIPS_AND_TIMELINE / 2}px`
};

const TopMomentBanner = ({
  style,
  className,
  usefulMomentPos,
  usableMomentPos
}) => {
  return (
    <div
      style={style}
      className={className}>
      <div className='top-moment-banner-inside'>
        {!isNaN(usefulMomentPos) && (
          <TopMomentAnnotation
            style={{
              ...commonStyle,
              transform: 'translate(-50%, 0)',
              color: 'var(--palette-lime-500)',
              left: `${usefulMomentPos}%`
            }}
            text='When did the user feel they could interact?' />
        )}
        {!isNaN(usableMomentPos) && (
          <TopMomentAnnotation
            style={{
              ...commonStyle,
              transform: 'translate(-80%, -100%)',
              color: 'var(--palette-orange-500)',
              left: `${usableMomentPos}%`
            }}
            text='When could they interact?' />
        )}
      </div>
    </div>
  );
};

export default TopMomentBanner;
