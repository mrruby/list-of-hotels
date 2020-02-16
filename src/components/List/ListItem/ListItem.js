/**
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListItem: () => React$Node = ({name, userRating}) => {
  return (
    <View>
      <Text style={styles.item}>{name}</Text>
      <Text style={styles.item}>{userRating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {fontSize: 20, paddingTop: 5},
});

export default ListItem;
