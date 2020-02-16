/**
 * @format
 * @flow
 */

import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';

const List: () => React$Node = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item: {name}}) => <Text style={styles.item}>{name}</Text>}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {fontSize: 20, paddingTop: 5},
});

export default List;
