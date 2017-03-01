import React, {Component} from 'react';
import BottomBarComponentStyle from '../style/BottomBarComponent'
import {
  View,
  Text,
  Image,
  TabBarIOS
} from 'react-native'

class BottomBarComponent extends Component {
  render() {
    return (
      <View style={BottomBarComponentStyle.bottomBarContainer}>
        <TabBarIOS unselectedTintColor="#47474A"
                   tintColor="#3E4245"
                   unselectedItemTintColor="#5A5859"
                   barTintColor="#EAE9E7"
                   style={BottomBarComponentStyle.tabBarContainer}>
          <TabBarIOS.Item title="原创" icon={require('../../images/pen.png')}>
          </TabBarIOS.Item>
          <TabBarIOS.Item title="书店" icon={require('../../images/bookshop.png')}></TabBarIOS.Item>
          <TabBarIOS.Item title="分类" icon={require('../../images/classify.png')}></TabBarIOS.Item>
          <TabBarIOS.Item title="我的" icon={require('../../images/mine.png')}></TabBarIOS.Item>
          <TabBarIOS.Item title="本地" icon={require('../../images/local.png')}></TabBarIOS.Item>

        </TabBarIOS>
      </View>
    )
  }
}

export default BottomBarComponent;
