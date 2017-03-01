import React, {Component} from 'react';
import AdComponentStyle from '../style/AdComponent';
import {
  View,
  Image
} from 'react-native'

class AdComponent extends Component {
  render() {
    return (
      <View style={AdComponentStyle.adContainer}>
        <Image source={require('../../images/ad.jpg')} style={AdComponentStyle.adImage}></Image>
      </View>
    )
  }
}

export default AdComponent;
