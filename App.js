import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productReducer from './store/reducers/products';
import ShopNavigator from './navigation/shopNavigator';

const rootReducer =combineReducers({
  product: productReducer
});

const store = createStore(rootReducer);


export default function App() {
  return (
    <Provider store={store}>
      <View >
        <ShopNavigator/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
