import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainApp  from './config/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { petReducer } from './reducers/likeReducer';

const store = createStore(petReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
