/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import SearchBarComponent from './src/component/SearchBarComponent';
import FreeComponent from './src/component/FreeComponent';
import NewlyComponent from './src/component/NewlyComponent';
import BottomBarComponent from './src/component/BottomBarComponent';
import AdComponent from './src/component/AdComponent';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native'

class DouBanDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBarComponent />
        <View style={styles.contentContainer}>
          <ScrollView horizontal={false} automaticallyAdjustContentInsets={false}>
            <AdComponent />
            <NewlyComponent />
            <FreeComponent />
          </ScrollView>
        </View>
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
  },
  contentContainer: {
    flex: 9
  }
});

AppRegistry.registerComponent('DouBanDemo', () => DouBanDemo);
