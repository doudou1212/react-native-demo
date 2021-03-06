import React, {Component} from 'react';
import BottomBarComponentStyle from '../style/BottomBarComponent';
import OriginalBookComponentContainer from './OriginalBookComponent';
import {
  View,
  Text,
  TabBarIOS,
  StyleSheet
} from 'react-native'

class BottomBarComponent extends Component {
  state = {
    selectedTab: '1',
  };

  render() {
    return (
      <View style={BottomBarComponentStyle.bottomBarContainer}>
        <TabBarIOS unselectedTintColor="#47474A"
                   tintColor="#E097B0"
                   unselectedItemTintColor="#5A5859"
                   barTintColor="#EAE9E7"
                   style={BottomBarComponentStyle.tabBarContainer}>
          <TabBarIOS.Item title="原创"
                          icon={require('../../images/pen.png')}
                          selected={this.state.selectedTab === '1'}
                          onPress={() => {
                              this.setState({
                                selectedTab: '1',
                              });
                          }}>
            <OriginalBookComponentContainer />
          </TabBarIOS.Item>
          <TabBarIOS.Item title="书店"
                          icon={require('../../images/bookshop.png')}
                          selected={this.state.selectedTab === '2'}
                          onPress={() => {
                              this.setState({
                                selectedTab: '2',
                              });
                          }}>
            <View style={BottomBarComponentStyle.booStoreContainer}>
              <Text style={BottomBarComponentStyle.otherText}>买什么买！快滚去干活！</Text>
            </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item title="分类" icon={require('../../images/classify.png')}
                          selected={this.state.selectedTab === '3'}
                          onPress={() => {
                              this.setState({
                                selectedTab: '3',
                              });
                          }}>
            <View style={BottomBarComponentStyle.classifyContainer}>
              <Text style={BottomBarComponentStyle.otherText}>哎呀，我也不懂分类算法，不分了。</Text>
            </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item title="我的" icon={require('../../images/mine.png')}
                          selected={this.state.selectedTab === '4'}
                          onPress={() => {
                              this.setState({
                                selectedTab: '4',
                              });
                          }}>
            <View style={BottomBarComponentStyle.mineContainer}>
              <Text style={BottomBarComponentStyle.otherText}>你啥都没有哦～亲</Text>
            </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item title="本地" icon={require('../../images/local.png')}
                          selected={this.state.selectedTab === '5'}
                          onPress={() => {
                              this.setState({
                                selectedTab: '5',
                              });
                          }}>
            <View style={BottomBarComponentStyle.localContainer}>
              <Text style={BottomBarComponentStyle.otherText}>本地是空哒！哈哈！傻了吧～</Text>
            </View>
          </TabBarIOS.Item>

        </TabBarIOS>
      </View>
    )
  }
}

export default BottomBarComponent;
