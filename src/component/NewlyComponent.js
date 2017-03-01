
import React, { Component } from 'react';
import NewlyComponentStyle from '../style/NewlyComponent';
import NewlyBookComponent from './NewlyBookComponent';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

import newlyBookInfoAction from "../actions/newlyBookInfoAction";

class NewlyComponent extends Component {
  render() {
    console.log("state is ", this.props.newlyBookInfo);
    return (
      <View style={NewlyComponentStyle.scrollContainer}>
        <Text style={NewlyComponentStyle.tilteContainer}>本周新上架</Text>
        <ScrollView automaticallyAdjustContentInsets={false}
                    horizontal={true}
                    style={NewlyComponentStyle.scroll}>
          <NewlyBookComponent />
          <NewlyBookComponent />
          <NewlyBookComponent />
        </ScrollView>
      </View>
    )
  }
}


function mapStateToProps(state) {
  return {
    newlyBookInfo: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newlyBookInfoAction: bindActionCreators(newlyBookInfoAction, dispatch)
  };
}

const NewlyComponentContainer = connect(mapStateToProps, mapDispatchToProps)(NewlyComponent);
export default NewlyComponentContainer;
