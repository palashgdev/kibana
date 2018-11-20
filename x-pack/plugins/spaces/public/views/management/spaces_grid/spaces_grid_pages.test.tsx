/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
<<<<<<< HEAD
import { mount, shallow } from 'enzyme';
import React from 'react';
=======
import React from 'react';
import { mountWithIntl, shallowWithIntl } from 'test_utils/enzyme_helpers';
>>>>>>> ff49a1c6742d67fa5daed569ff3bb269783f6bd1
import { UserProfileProvider } from '../../../../../xpack_main/public/services/user_profile';
import { SpaceAvatar } from '../../../components';
import { SpacesManager } from '../../../lib';
import { SpacesNavState } from '../../nav_control';
import { SpacesGridPage } from './spaces_grid_page';

const buildUserProfile = (canManageSpaces: boolean) => {
  return UserProfileProvider({ manageSpaces: canManageSpaces });
};

const spaces = [
  {
    id: 'default',
    name: 'Default',
    _reserved: true,
  },
  {
    id: 'custom-1',
    name: 'Custom 1',
  },
  {
    id: 'custom-2',
    name: 'Custom 2',
    initials: 'LG',
    color: '#ABCDEF',
    description: 'my description here',
  },
];

const mockHttp = {
  get: jest.fn(async () => ({
    data: spaces,
  })),
};

const mockChrome = {
  addBasePath: (path: string) => path,
};

const spacesNavState: SpacesNavState = {
  getActiveSpace: () => spaces[0],
  refreshSpacesList: jest.fn(),
};

const spacesManager = new SpacesManager(mockHttp, mockChrome, '');

describe('SpacesGridPage', () => {
  it('renders as expected', () => {
    expect(
<<<<<<< HEAD
      shallow(
        <SpacesGridPage
          spacesManager={spacesManager}
          spacesNavState={spacesNavState}
          userProfile={buildUserProfile(true)}
=======
      shallowWithIntl(
        <SpacesGridPage.WrappedComponent
          spacesManager={spacesManager}
          spacesNavState={spacesNavState}
          userProfile={buildUserProfile(true)}
          intl={null as any}
>>>>>>> ff49a1c6742d67fa5daed569ff3bb269783f6bd1
        />
      )
    ).toMatchSnapshot();
  });

  it('renders the list of spaces', async () => {
<<<<<<< HEAD
    const wrapper = mount(
      <SpacesGridPage
        spacesManager={spacesManager}
        spacesNavState={spacesNavState}
        userProfile={buildUserProfile(true)}
=======
    const wrapper = mountWithIntl(
      <SpacesGridPage.WrappedComponent
        spacesManager={spacesManager}
        spacesNavState={spacesNavState}
        userProfile={buildUserProfile(true)}
        intl={null as any}
>>>>>>> ff49a1c6742d67fa5daed569ff3bb269783f6bd1
      />
    );

    // allow spacesManager to load spaces
    await Promise.resolve();
    wrapper.update();
    await Promise.resolve();
    wrapper.update();

    expect(wrapper.find(SpaceAvatar)).toHaveLength(spaces.length);
    expect(wrapper.find(SpaceAvatar)).toMatchSnapshot();
  });
});
