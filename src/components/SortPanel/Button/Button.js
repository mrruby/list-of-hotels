/**
 * @format
 * @flow
 */

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../../../constants';

const Button: () => React$Node = ({onPress, children}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: colors.secondary,
    borderRadius: 10,
    margin: 3,
  },
  text: {
    fontWeight: '500',
    padding: 5,
  },
});

export default Button;
