
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
        selectedTab:'首页',
    }
  }
  render() {
      return (
          <View style={styles.container} >
              <TabNavigator>
                  <TabNavigator.Item
                      selected={this.state.selectedTab === '首页'}
                      title="首页"
                      titleStyle={styles.tabText}
                      selectedTitleStyle={styles.selectedTabText}
                      renderIcon={() => <Image style={styles.icon} source={require('./images/home.png')} />}
                      renderSelectedIcon={() => <Image style={styles.icon} source={require('./images/home.png')} />}
                      onPress={() => this.setState({ selectedTab: '首页' })}>
                  <Text>这是首页</Text>
                  </TabNavigator.Item>
                  <TabNavigator.Item
                      selected={this.state.selectedTab === '消息'}
                      title="消息"
                      titleStyle={styles.tabText}
                      selectedTitleStyle={styles.selectedTabText}
                      renderIcon={() => <Image style={styles.icon} source={require('./images/home.png')} />}
                      renderSelectedIcon={() => <Image style={styles.icon} source={require('./images/home.png')} />}
                      onPress={() => this.setState({ selectedTab: '消息' })}>
                      <Text>这是消息</Text>
                  </TabNavigator.Item>
                  <TabNavigator.Item
                      selected={this.state.selectedTab === '联系人'}
                      title="联系人"
                      titleStyle={styles.tabText}
                      selectedTitleStyle={styles.selectedTabText}
                      renderIcon={() => <Image style={styles.icon} source={require('./images/home.png')} />}
                      renderSelectedIcon={() => <Image style={styles.icon} source={require('./images/home.png')} />}
                      onPress={() => this.setState({ selectedTab: '联系人' })}>
                      <Text>这是联系人</Text>
                  </TabNavigator.Item>
              </TabNavigator>
          </View>
      );

  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        color: "#000000",
        fontSize: 13
    },
    selectedTabText: {
        color: "#999999",
        fontSize: 13
    },
    icon: {
        width: 20,
        height: 20
    }

});
