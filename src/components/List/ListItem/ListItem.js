/**
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../../../constants';

const ListItem: () => React$Node = ({
  name,
  userRating,
  images,
  location,
  stars,
}) => {
  const info = [name, location?.city, `Rate: ${userRating}`];
  return (
    <View style={[styles.row, styles.container]}>
      <Image style={styles.image} source={{uri: images[0]}} />
      <View>
        {info.map((text, index) => (
          <Text
            key={`${text}:item:${index}`}
            style={[styles.item, styles.wrap]}>
            {text}
          </Text>
        ))}
        <Text style={styles.item}>{[...Array(stars)].map(() => '☆')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingLeft: 20,
    fontSize: 14,
    paddingHorizontal: 1,
    fontWeight: '500',
  },
  wrap: {
    flex: 1,
    flexWrap: 'wrap',
  },
  image: {width: 110, height: 100, paddingRight: 10},
  row: {
    flexDirection: 'row',
  },
  container: {
    backgroundColor: colors.white,
    margin: 10,
    borderRadius: 15,
  },
});

export default ListItem;
