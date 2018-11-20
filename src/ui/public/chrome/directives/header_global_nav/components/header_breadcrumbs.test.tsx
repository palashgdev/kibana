/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { mount } from 'enzyme';
import React from 'react';
<<<<<<< HEAD
import { breadcrumbs, set } from '../../../services/breadcrumb_state';
import { HeaderBreadcrumbs } from './header_breadcrumbs';

describe('HeaderBreadcrumbs', () => {
  it('renders updates to the breadcrumbs observable', () => {
    const wrapper = mount(<HeaderBreadcrumbs breadcrumbs={breadcrumbs} />);

    set([{ text: 'First' }]);
=======
import * as Rx from 'rxjs';
import { Breadcrumb } from '../../../../../../core/public/chrome';
import { HeaderBreadcrumbs } from './header_breadcrumbs';

describe('HeaderBreadcrumbs', () => {
  it('renders updates to the breadcrumbs$ observable', () => {
    const breadcrumbs$ = new Rx.Subject<Breadcrumb[]>();
    const wrapper = mount(<HeaderBreadcrumbs breadcrumbs$={breadcrumbs$} />);

    breadcrumbs$.next([{ text: 'First' }]);
>>>>>>> ff49a1c6742d67fa5daed569ff3bb269783f6bd1
    // Unfortunately, enzyme won't update the wrapper until we call update.
    wrapper.update();
    expect(wrapper.find('.euiBreadcrumb')).toMatchSnapshot();

<<<<<<< HEAD
    set([{ text: 'First' }, { text: 'Second' }]);
    wrapper.update();
    expect(wrapper.find('.euiBreadcrumb')).toMatchSnapshot();

    set([]);
=======
    breadcrumbs$.next([{ text: 'First' }, { text: 'Second' }]);
    wrapper.update();
    expect(wrapper.find('.euiBreadcrumb')).toMatchSnapshot();

    breadcrumbs$.next([]);
>>>>>>> ff49a1c6742d67fa5daed569ff3bb269783f6bd1
    wrapper.update();
    expect(wrapper.find('.euiBreadcrumb')).toMatchSnapshot();
  });
});
