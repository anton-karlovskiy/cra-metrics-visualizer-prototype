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

import { APP_NAME } from 'utils/constants';
import logo from 'assets/logo/speedometer.svg';
import './product-logo-title.css';

const ProductLogoTitle = () => (
  <div className='product-logo-title'>
    <a
      href='/'
      className='product-link'
      data-label='Project Logo (header)'>
      <img
        src={logo}
        className='product-logo'
        alt='PageSpeed Metrics Visualizer' />
    </a>
    <a
      href='/'
      className='product-title'
      data-label='Upper Header'>
      {APP_NAME}
    </a>
  </div>
);

export default ProductLogoTitle;
