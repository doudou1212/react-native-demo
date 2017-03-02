import React, {Component} from 'react';
import FreeComponent from './FreeComponent';
import NewlyComponentContainer from './NewlyComponent';
import SearchBarComponent from './SearchBarComponent';
import AdComponent from './AdComponent';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native'

class OriginalBookComponent extends Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        <ScrollView horizontal={false} automaticallyAdjustContentInsets={false}>
          <SearchBarComponent />
          <AdComponent />
          <NewlyComponentContainer />
          <FreeComponent />
        </ScrollView>
      </View>);
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 9
  }
});

export default OriginalBookComponent;
