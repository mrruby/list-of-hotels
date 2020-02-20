/**
 * @format
 * @flow
 */

import React from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem/ListItem';

const List: () => React$Node = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <ListItem {...item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default List;
