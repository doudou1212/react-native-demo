import React, {Component} from 'react';
import {StyleSheet} from 'react-native'

const BottomBarComponentStyle = StyleSheet.create({
  bottomBarContainer: {
    flex:10,
  },
  tabBarContainer: {
    width:420,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'red',
    margin: 50,
  }
});

export default BottomBarComponentStyle;