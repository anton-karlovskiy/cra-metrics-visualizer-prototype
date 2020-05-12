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

import './aspect-ratio-box.css';

const AspectRatioBox = ({
  children,
  aspectRatio = 1,
  ...rest
}) => (
  <div
    {...rest}
    style={{paddingTop: `${1 / aspectRatio * 100}%`}}
    className='aspect-ratio-box'>
    <div className='aspect-ratio-box-inside'>
      {children}
    </div>
  </div>
);

export default AspectRatioBox;
