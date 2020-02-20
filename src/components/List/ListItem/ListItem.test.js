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
    const results = [
      mockedHotel.name,
      mockedHotel.location.city,
      `Rate: ${mockedHotel.userRating}`,
    ];
    results.map((result, index) => {
      expect(elementListChildren[index]).toBe(result);
    });
  });
});
