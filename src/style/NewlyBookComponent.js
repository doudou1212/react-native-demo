import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const NewlyBookComponentStyle = StyleSheet.create({
  newlyBookContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10
  },
  newlyBookImageContainer: {
    flex:1
  },
  newlyBookInfoContainer: {
    flex:3,
    marginLeft:20
  },
  newlyBookImage: {
    width: 100,
    height:150,
    marginBottom:15
  },
  newlyBookName: {
    fontSize: 18,
    color: '#353535',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop:2
  },
  newlyBookAuthor: {
    fontSize: 16,
    color: '#B5B5B5',
    marginTop:5,
    marginBottom:5
  },
  newlyBookIntroduce: {
    width: 260,
    fontSize: 17,
    color: '#B5B5B5',
    marginTop:5
  }
});

export default NewlyBookComponentStyle;