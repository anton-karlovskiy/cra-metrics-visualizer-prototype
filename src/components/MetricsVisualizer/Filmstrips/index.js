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
import { FILMSTRIP_PADDING } from 'utils/styling';
import './filmstrips.css';

const Filmstrips = ({
  screenshotDetails: {
    items = [],
    intrinsicWidth,
    intrinsicHeight
  } = {},
  ...rest
}) => (
  <div
    {...rest}
    className='filmstrips'>
    {items.map((item, index) => (
      <div
        key={item.timing}
        style={{
          marginRight: `${FILMSTRIP_PADDING}px`,
          marginLeft: index === 0 ? `${FILMSTRIP_PADDING}px` : 0
        }}>
        <AspectRatioBox aspectRatio={intrinsicWidth / intrinsicHeight}>
          <img
            width='100%'
            height='100%'
            src={item.data}
            alt='Performance Filmstrip' />
        </AspectRatioBox>
      </div>
    ))}
  </div>
);

export default Filmstrips;
