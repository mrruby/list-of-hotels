/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  ActivityIndicator,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import List from './src/components/List/List';
import Title from './src/components/other/Title';
import SortPanel from './src/components/SortPanel/SortPanel';
import {colors} from './src/constants';
import {useHotelsApi} from './src/hooks';

const App: () => React$Node = () => {
  const [hotelsList, setHotelsList] = useState([]);
  const [isLoading, initialData] = useHotelsApi(setHotelsList);
  return (
    <View style={styles.background}>
      <SafeAreaView />

      <SafeAreaView style={styles.content}>
        <Title />
        <View style={styles.content}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <>
              <List data={hotelsList} />
              <SortPanel {...{setHotelsList, initialData}} />
            </>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.main,
    flex: 1,
  },
  content: {flex: 1, backgroundColor: colors.background},
});

export default App;
