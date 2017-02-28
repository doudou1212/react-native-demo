
import React, { Component } from 'react';
import NewlyComponentStyle from '../style/NewlyComponent';
import NewlyBookComponent from './NewlyBookComponent';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native'

class NewlyComponent extends Component {
  render() {
    return (
      <View style={NewlyComponentStyle.scrollContainer}>
        <Text style={NewlyComponentStyle.tilteContainer}>本周新上架</Text>
        <ScrollView automaticallyAdjustContentInsets={false}
                    horizontal={true}
                    style={NewlyComponentStyle.scroll}>
          <NewlyBookComponent />
        </ScrollView>
      </View>
    )
  }
}

export default NewlyComponent;
