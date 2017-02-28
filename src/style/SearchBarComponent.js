import React, {Component} from 'react';
import {StyleSheet} from 'react-native'

const SearchBarComponentStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    marginTop: 50,
    borderBottomColor: '#E2E6E5',
    borderStyle: 'solid',
    borderBottomWidth: 1
  },
  seachBar: {
    height: 30,
    width: 400,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.5)",
    marginLeft: 8,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 17,
    textAlign: 'center'
  },
  searchIcon: {
    width: 20,
    height: 20,
  }
});

export default SearchBarComponentStyle;