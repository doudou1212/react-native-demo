
import React, { Component } from 'react';
import SearchBarComponentStyle from '../style/SearchBarComponent';
import {
  View,
  TextInput,
  Image
} from 'react-native'

class SearchBarComponent extends Component {
  render() {
    var searchIcon = (<Image
      style={SearchBarComponentStyle.searchIcon}
      source={require('../../images/Search-50.png')}/>);
    return (
      <View style={SearchBarComponentStyle.container}>
        <TextInput
          style={SearchBarComponentStyle.seachBar}
          placeholder={'原创作品/中文图书/英文图书'}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(text) => {this.setState({text})}}
          onSubmitEditing={() => {this.setState({text: ''})}}
          value={(this.state && this.state.text) || ''}
        >
        </TextInput>
      </View>
    )
  }
}

export default SearchBarComponent;
