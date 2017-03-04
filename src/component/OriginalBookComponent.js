import React, {Component} from 'react';
import FreeComponent from './FreeComponent';
import NewlyComponent from './NewlyComponent';
import SearchBarComponent from './SearchBarComponent';
import AdComponent from './AdComponent';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import SearchResultsComponent from './SearchResultsComponent'
import {
  View,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

import * as searchBookInfoAction from "../actions/searchBookAction";
import * as newlyBookInfoAction from "../actions/newlyBookInfoAction";

class OriginalBookComponent extends Component {
  componentWillMount() {
    this.props.newlyBookInfoAction.getBookInfo(4238362);
  }

  shouldComponentUpdate(nextProps) {
    if(nextProps == this.props) {
      return false;
    }
    return true;
  }

  renderContent() {
    if (this.props.searchBookInfo.books) {
      return (
        <View>
          <SearchResultsComponent books={this.props.searchBookInfo.books}/>
        </View>
      );
    } else {
      return (
        <View>
          <AdComponent />
          <NewlyComponent newlyBookInfo={this.props.newlyBookInfo}/>
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
    searchBookInfo: state.searchBooks.searchBookInfos,
    newlyBookInfo: state.newlyBooks.newlyBookInfos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchBookInfoAction: bindActionCreators(searchBookInfoAction, dispatch),
    newlyBookInfoAction: bindActionCreators(newlyBookInfoAction, dispatch)
  };
}

const OriginalBookComponentContainer = connect(mapStateToProps, mapDispatchToProps)(OriginalBookComponent);
export default OriginalBookComponentContainer;
