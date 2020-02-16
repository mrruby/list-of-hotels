/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {SafeAreaView, Text, ActivityIndicator} from 'react-native';
import List from './src/components/List/List';
import {useHotelsApi} from './src/hooks';

const App: () => React$Node = () => {
  const [hotelsList, setHotelsList] = useState([]);
  const isLoading = useHotelsApi(setHotelsList);
  return (
    <SafeAreaView>
      <Text>List of Hotels</Text>
      {isLoading ? <ActivityIndicator /> : <List data={hotelsList} />}
    </SafeAreaView>
  );
};

export default App;
