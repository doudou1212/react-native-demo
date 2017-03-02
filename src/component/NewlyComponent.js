import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import NewlyComponentStyle from '../style/NewlyComponent';
import NewlyBookComponent from './NewlyBookComponent';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

import * as newlyBookInfoAction from "../actions/newlyBookInfoAction";

class NewlyComponent extends Component {
  componentWillMount() {
    this.props.newlyBookInfoAction.getBookInfo(4238362);
  }

  render() {
    console.log("state is ", this.props.newlyBookInfo);
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


function mapStateToProps(state) {
  return {
    newlyBookInfo: state.newlyBooks.newlyBookInfos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newlyBookInfoAction: bindActionCreators(newlyBookInfoAction, dispatch)
  };
}

const NewlyComponentContainer = connect(mapStateToProps, mapDispatchToProps)(NewlyComponent);
export default NewlyComponentContainer;
