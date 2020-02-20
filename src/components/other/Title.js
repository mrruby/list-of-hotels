/**
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../constants';

const Title: () => React$Node = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Hotels</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main,
    // borderRadius: 20,
    // margin: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    padding: 5,
    color: colors.white,
  },
});

export default Title;
