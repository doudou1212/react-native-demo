import React, {Component} from 'react';
import {StyleSheet} from 'react-native'

const FreeComponentStyle = StyleSheet.create({
  freeContainer: {
    flex:5,
  },
  titleContainer: {
    marginTop: 15,
    marginBottom: 15
  },
  title: {
    fontFamily: 'Times',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#353535'
  },
  content: {
    flex:1,
    flexDirection: 'row',
  },
  first: {
    width: 110,
    height: 200,
    marginLeft: 10,
    marginRight: 10
  },
  second: {
    width: 110,
    height: 200,
    marginLeft: 10,
    marginRight: 10
  },
  third: {
    width: 110,
    height: 200,
    marginLeft: 10,
    marginRight: 10
  },
  freeImage: {
    width: 100,
    height: 150,
    marginLeft: 5,
    marginRight: 5
  },
  bookName: {
    marginTop:8,
    fontSize:15,
    color: '#3F3F3F'
  },
  bookAuthor: {
    marginTop:5,
    fontSize:14,
    color: '#ADADAD'
  }
});

export default FreeComponentStyle;