/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from './App';

// Note: test renderer must be required after react-native.
import {create} from 'react-test-renderer';

describe('Screen: App', () => {
  it('renders correctly', () => {
    create(<App />);
  });
  it('renders loading indicator', () => {
    const component = create(<App />).root;
    const element = component.findAllByType('ActivityIndicator');
    expect(element).toBeTruthy();
  });
});
