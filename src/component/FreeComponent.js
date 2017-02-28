import React, {Component} from 'react';
import FreeComponentStyle from '../style/FreeComponent';
import {
  View,
  Text,
  Image
} from 'react-native'

class FreeComponent extends Component {
  render() {
    return (
      <View>
        <View style={FreeComponentStyle.titleContainer}>
          <Text style={FreeComponentStyle.title}>免费作品</Text>
        </View>
        <View style={FreeComponentStyle.content}>
          <View style={FreeComponentStyle.first}>
            <Image source={require('../../images/free1.jpg')} style={FreeComponentStyle.freeImage}/>
            <Text style={FreeComponentStyle.bookName} numberOfLines={2}>我们都一样孤独无依</Text>
            <Text style={FreeComponentStyle.bookAuthor}>陆禾</Text>
          </View>
          <View style={FreeComponentStyle.second}>
            <Image source={require('../../images/free2.jpg')} style={FreeComponentStyle.freeImage}/>
            <Text style={FreeComponentStyle.bookName} numberOfLines={2}>你可能不知道的香港</Text>
            <Text style={FreeComponentStyle.bookAuthor}>林嘉文</Text>
          </View>
          <View style={FreeComponentStyle.third}>
            <Image source={require('../../images/free3.jpg')} style={FreeComponentStyle.freeImage}/>
            <Text style={FreeComponentStyle.bookName} numberOfLines={2}>春秋战国：一段你应该了解的往事</Text>
            <Text style={FreeComponentStyle.bookAuthor}>茅庐小生</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default FreeComponent;
