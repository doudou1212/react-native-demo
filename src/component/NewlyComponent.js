import React, {Component} from 'react';
import NewlyComponentStyle from '../style/NewlyComponent';
import NewlyBookComponent from './NewlyBookComponent';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';


class NewlyComponent extends Component {
  render() {
    const bookInfo = this.props.newlyBookInfo;
    if (this.props.newlyBookInfo.title) {
      return (
        <View style={NewlyComponentStyle.scrollContainer}>
          <Text style={NewlyComponentStyle.tilteContainer}>本周新上架</Text>
          <ScrollView automaticallyAdjustContentInsets={false}
                      horizontal={true}
                      style={NewlyComponentStyle.scroll}>
            <NewlyBookComponent title={bookInfo.title} image={bookInfo.images.large} author={bookInfo.author} summary={bookInfo.summary}/>
          </ScrollView>
        </View>
      )
    } else {
      return null;
    }
  }
}


export default NewlyComponent;
