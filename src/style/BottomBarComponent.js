import React, {Component} from 'react';
import {StyleSheet} from 'react-native'

const BottomBarComponentStyle = StyleSheet.create({
  bottomBarContainer: {
    flex:1,
  },
  tabBarContainer: {
    width:420,
    marginBottom: 3
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