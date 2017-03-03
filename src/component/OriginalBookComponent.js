import React, {Component} from 'react';
import FreeComponent from './FreeComponent';
import NewlyComponentContainer from './NewlyComponent';
import SearchBarComponent from './SearchBarComponent';
import AdComponent from './AdComponent';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
  View,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

import * as searchBookInfoAction from "../actions/searchBookAction";

class OriginalBookComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.searchBookInfo != this.props.searchBookInfo) {
      return true;
    }
    return false;
  }

  renderContent() {
    if (this.props.searchBookInfo.books && this.props.searchBookInfo.books.length > 0) {
      return (
        <View>
          <Text>hhhh</Text>
        </View>
      );
    } else {
      return (
        <View>
          <AdComponent />
          <NewlyComponentContainer />
          <FreeComponent />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.contentContainer}>
        <ScrollView horizontal={false} automaticallyAdjustContentInsets={false}>
          <SearchBarComponent searchBooks={this.props.searchBookInfoAction.searchBookInfo}/>
          {this.renderContent()}
        </ScrollView>
      </View>);
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 9
  }
});

function mapStateToProps(state) {
  return {
    searchBookInfo: state.searchBooks.searchBookInfos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchBookInfoAction: bindActionCreators(searchBookInfoAction, dispatch)
  };
}

const OriginalBookComponentContainer = connect(mapStateToProps, mapDispatchToProps)(OriginalBookComponent);
export default OriginalBookComponentContainer;
