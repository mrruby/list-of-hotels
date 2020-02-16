/**
 * @format
 */

import 'react-native';
import React from 'react';
import List from './List';
import mockedData from '../../test/mock/data.json';

import {create} from 'react-test-renderer';

describe('Component: List', () => {
  it('renders list of hotels', () => {
    const component = create(<List data={mockedData.hotels} />).root;
    const elementList = component.findAllByType('Text');
    elementList.forEach((el, index) => {
      expect(el.children.includes(mockedData.hotels[index].name)).toBeTruthy();
    });
  });
});
