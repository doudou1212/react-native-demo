import React, {Component} from 'react';
import NewlyBookComponentStyle from '../style/NewlyBookComponent';
import {
  View,
  Text,
  Image,
} from 'react-native'

class NewlyBookComponent extends Component {
  render() {
    return (
      <View style={NewlyBookComponentStyle.newlyBookContainer}>
        <View style={NewlyBookComponentStyle.newlyBookImageContainer}>
          <Image source={require('../../images/newly1.jpg')} style={NewlyBookComponentStyle.newlyBookImage}/>
        </View>
        <View style={NewlyBookComponentStyle.newlyBookInfoContainer}>
          <Text style={NewlyBookComponentStyle.newlyBookName}>你可以拥有你想要的生活</Text>
          <Text style={NewlyBookComponentStyle.newlyBookAuthor}>艾小玛</Text>
          <Text style={NewlyBookComponentStyle.newlyBookIntroduce}
                numberOfLines={4}>当你开始奋斗，做一些什么的时候，自然会遭遇挫折和失败。失败并不是因为追求自己想要的生活，而是“没有使用正确的方法”。
期待能够过上幸福的生活，必须拥有能力。这个能力包含了不放弃的精神，逻辑思考能力，判断是非的能力，道德底线等等。
心灵鸡汤说“努力就好”，残酷的是，就连努力、情绪稳定、甚至阅读能力，都是需要我们在后天学习而来的。举个例子：你的目标是打开一个罐头，但却选择塑料勺子作为工具，所以必然会失败。打开罐头这个事情没有错，问题在于没有使用正确的工具。
我想心灵鸡汤就是负责鼓吹怎么用勺子打开罐头，而我更希望和大家讨论“如何找到合适的工具”。
写给那些“想要去追梦”，或者“正在迷茫，不知道怎么办”的家伙。这个也是我最早想写这本书的初衷，我希望和其他人分享我的感受与经验，与大家一起，过上自己想要的生活。</Text>
        </View>
      </View>
    )
  }
}

export default NewlyBookComponent;
