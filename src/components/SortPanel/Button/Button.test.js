/**
 * @format
 */

import 'react-native';
import React from 'react';
import Button from './Button';
import {create} from 'react-test-renderer';

describe('Component: Button', () => {
  it('triggers onPress function thats has been past as a props on component', () => {
    const onPress = jest.fn();
    const component = create(<Button onPress={onPress} />).root;
    component.props.onPress();
    expect(onPress).toHaveBeenCalled();
  });
});
