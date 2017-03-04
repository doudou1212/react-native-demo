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
  },
  booStoreContainer: {
    marginTop: 20
  },
  classifyContainer: {
    marginTop:20
  },
  mineContainer: {
    marginTop:20
  },
  localContainer: {
    marginTop: 20
  },
  otherText: {
    fontFamily: 'Times',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: "center"
  }
});

export default BottomBarComponentStyle;