/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
<<<<<<< HEAD
import { shallow } from 'enzyme';
import React from 'react';
=======
import React from 'react';
import { shallowWithIntl } from 'test_utils/enzyme_helpers';
>>>>>>> ff49a1c6742d67fa5daed569ff3bb269783f6bd1
import { AdvancedSettingsTitle } from './advanced_settings_title';

describe('AdvancedSettingsTitle', () => {
  it('renders as expected', () => {
    const space = {
      id: 'my-space',
      name: 'My Space',
    };
<<<<<<< HEAD
    expect(shallow(<AdvancedSettingsTitle space={space} />)).toMatchSnapshot();
=======
    expect(shallowWithIntl(<AdvancedSettingsTitle space={space} />)).toMatchSnapshot();
>>>>>>> ff49a1c6742d67fa5daed569ff3bb269783f6bd1
  });
});
