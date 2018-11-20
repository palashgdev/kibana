/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { EuiIcon } from '@elastic/eui';
<<<<<<< HEAD
import { shallow } from 'enzyme';
import React from 'react';
=======
import React from 'react';
import { shallowWithIntl } from 'test_utils/enzyme_helpers';
>>>>>>> ff49a1c6742d67fa5daed569ff3bb269783f6bd1
import { ReservedSpaceBadge } from './reserved_space_badge';

const reservedSpace = {
  id: '',
  name: '',
  _reserved: true,
};

const unreservedSpace = {
  id: '',
  name: '',
};

test('it renders without crashing', () => {
<<<<<<< HEAD
  const wrapper = shallow(<ReservedSpaceBadge space={reservedSpace} />);
=======
  const wrapper = shallowWithIntl(<ReservedSpaceBadge space={reservedSpace} />);
>>>>>>> ff49a1c6742d67fa5daed569ff3bb269783f6bd1
  expect(wrapper.find(EuiIcon)).toHaveLength(1);
});

test('it renders nothing for an unreserved space', () => {
<<<<<<< HEAD
  const wrapper = shallow(<ReservedSpaceBadge space={unreservedSpace} />);
=======
  const wrapper = shallowWithIntl(<ReservedSpaceBadge space={unreservedSpace} />);
>>>>>>> ff49a1c6742d67fa5daed569ff3bb269783f6bd1
  expect(wrapper.find('*')).toHaveLength(0);
});
