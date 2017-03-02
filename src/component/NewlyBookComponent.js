import React, {Component} from 'react';
import NewlyBookComponentStyle from '../style/NewlyBookComponent';
import {
  View,
  Text,
  Image,
} from 'react-native'

class NewlyBookComponent extends Component {
  render() {
    console.log("props is ", this.props);
    return (
      <View style={NewlyBookComponentStyle.newlyBookContainer}>
        <View style={NewlyBookComponentStyle.newlyBookImageContainer}>
          <Image source={{uri:this.props.image}} style={NewlyBookComponentStyle.newlyBookImage}/>
        </View>
        <View style={NewlyBookComponentStyle.newlyBookInfoContainer}>
          <Text style={NewlyBookComponentStyle.newlyBookName}>{this.props.title}</Text>
          <Text style={NewlyBookComponentStyle.newlyBookAuthor}>{this.props.author || '佚名'}</Text>
          <Text style={NewlyBookComponentStyle.newlyBookIntroduce}
                numberOfLines={4}>{this.props.summary}</Text>
        </View>
      </View>
    )
  }
}

export default NewlyBookComponent;
