/**
 * @format
 */

import 'react-native';
import React from 'react';
import SortPanel from './SortPanel';
import Button from './Button/Button';
import mockedData from '../../test/mock/data.json';
import {sortByRate} from '../../helpers';

import {create, act} from 'react-test-renderer';

describe('Component: SortPanel', () => {
  it('sorts and clear filters when button is clicked', () => {
    const defaultProps = {
      setHotelsList: jest.fn(),
      initialData: mockedData.hotels,
    };
    const component = create(<SortPanel {...defaultProps} />).root;
    const button = component.findAllByType(Button)[0];
    act(button.props.onPress);
    expect(defaultProps.setHotelsList).toBeCalledWith(
      sortByRate(mockedData.hotels),
    );
    act(button.props.onPress);
    expect(defaultProps.setHotelsList).toBeCalledWith(mockedData.hotels);
  });
});
