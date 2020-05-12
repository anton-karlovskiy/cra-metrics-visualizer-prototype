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

import ContainedButton from 'components/UI/ContainedButton';
import TextField from 'components/UI/TextField';
import { INPUT_NAMES } from 'utils/constants';
import './lighthouse-action.css';

const LighthouseAction = ({
  loading,
  inputs,
  onSubmit,
  inputChange
}) => (
  <div className='lighthouse-action'>
    <form
      className='url-and-analyze'
      onSubmit={onSubmit}>
      <TextField
        id='url'
        type='url'
        pattern='^(http|https)://.*'
        required
        name={INPUT_NAMES.LIGHTHOUSE_URL}
        inputMode='url'
        value={inputs[INPUT_NAMES.LIGHTHOUSE_URL]}
        onChange={inputChange}
        placeholder='Enter a web page URL'
        aria-label='Enter a web page URL' />
      <ContainedButton
        loading={loading}
        type='submit'
        className='analyze-submit'>
        Analyze
      </ContainedButton>
    </form>
  </div>
);

export default LighthouseAction;
