import React, {Component} from 'react';
import SearchResultsComponentStyle from '../style/SearchResultsComponent';
import NewlyBookComponent from './NewlyBookComponent';
import {
  View,
  Text,
  ListView
} from 'react-native';

class SearchResultsComponent extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
      ds: [{"1": "TeamA", "2": "TeamB", "3": "AwayTeam"}]
    };
  }

  componentDidMount() {
    const a = this.props.books;
    this.setState({dataSource: this.state.dataSource.cloneWithRows(this.props.books)});
  }

  renderRow(rowData) {
    return (<NewlyBookComponent title={rowData.title} image={rowData.images.large} author={rowData.author} summary={rowData.summary}/>);
  }

  render() {
    if (this.props.books.length > 0) {
      return (
        <View style={SearchResultsComponentStyle.resultContainer}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData)=>this.renderRow(rowData)}
          />
        </View>
      )
    } else {
      return (
        <View style={SearchResultsComponentStyle.resultContainer}>
          <Text>抱歉哦亲，没有找到搜索结果</Text>
        </View>
      );
    }
  }
}

export default SearchResultsComponent;
