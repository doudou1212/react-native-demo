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
                   unselectedItemTintColor="red"
                   barTintColor="#EAE9E7"
                   style={BottomBarComponentStyle.tabBarContainer}>
          <TabBarIOS.Item title="原创">
          </TabBarIOS.Item>
          <TabBarIOS.Item title="书店"></TabBarIOS.Item>
          <TabBarIOS.Item title="分类"></TabBarIOS.Item>
          <TabBarIOS.Item title="我的"></TabBarIOS.Item>
          <TabBarIOS.Item title="本地"></TabBarIOS.Item>

        </TabBarIOS>
      </View>
    )
  }
}

export default BottomBarComponent;
