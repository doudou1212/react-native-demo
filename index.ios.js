/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import SearchBarComponent from './src/component/SearchBarComponent';
import BottomBarComponent from './src/component/BottomBarComponent';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native'

class DouBanDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBarComponent />
        <BottomBarComponent />
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
