
import React, { Component } from 'react';
import SearchBarComponentStyle from '../style/SearchBarComponent';
import {
  View,
  TextInput,
  Image
} from 'react-native'

class SearchBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  search(text) {
    console.log("bbbbbbbb");
    this.setState({text});
    this.props.searchBooks("q="+text);
  }

  render() {
    return (
      <View style={SearchBarComponentStyle.container}>
        <TextInput
          style={SearchBarComponentStyle.seachBar}
          placeholder={'原创作品/中文图书/英文图书'}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(text) => { this.search(text)}}
          onSubmitEditing={() => {this.setState({text: ''})}}
          value={(this.state && this.state.text) || ''}
        >
        </TextInput>
      </View>
    )
  }
}

export default SearchBarComponent;
