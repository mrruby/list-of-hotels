/**
 * @format
 */

import 'react-native';
import React from 'react';
import ListItem from './ListItem';
import mockedData from '../../../test/mock/data.json';
import {flatten} from '../../../helpers';
import {create} from 'react-test-renderer';

describe('Component: ListItem', () => {
  it('shows hotel name and rating', () => {
    const mockedHotel = mockedData.hotels[0];
    const component = create(<ListItem {...mockedHotel} />).root;
    const elementList = component.findAllByType('Text');
    const elementListChildren = flatten(
      elementList.map(({children}) => children),
    );
    expect(elementListChildren[0]).toBe(mockedHotel.name);
    expect(elementListChildren[1]).toBe(mockedHotel.userRating.toString());
  });
});
