/**
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './Button/Button';
import {sortByRate} from '../../helpers';

const SortPanel: () => React$Node = ({setHotelsList, initialData}) => {
  const [isSorted, setIsSorted] = useState(false);
  const onPress = () => {
    setHotelsList(isSorted ? initialData : sortByRate(initialData));
    setIsSorted(!isSorted);
  };

  return (
    <View style={styles.row}>
      <Button onPress={onPress}>
        {isSorted ? 'Clear filter' : 'Sort by rate'}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 5,
  },
});

export default SortPanel;
