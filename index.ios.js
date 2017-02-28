/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SearchBarComponent from './src/component/SearchBarComponent';
import FreeComponent from './src/component/FreeComponent';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native'

class DouBanDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBarComponent />
        <FreeComponent />
      </View>
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
