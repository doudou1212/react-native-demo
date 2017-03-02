/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from "react-redux";
import configureStore from "./src/stores/store";
import BottomBarComponent from './src/component/BottomBarComponent';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native'

const store = configureStore();

class DouBanDemo extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <BottomBarComponent />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F8F8F8'
  }
});

AppRegistry.registerComponent('DouBanDemo', () => DouBanDemo);
