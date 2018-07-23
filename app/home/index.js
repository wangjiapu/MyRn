import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
} from 'react-native';

export default class Home extends Component<Props> {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds,
        };
    }

    _renderHeader() {
        return (
            <View style={{flex: 1, marginBottom: 10}}>
                <Search/>
                <View style={{flex: 1, backgroundColor: 'white'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: "#e4e4e4"}}/>
                    <View
                        style={{
                            flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                            paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10,
                        }}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../images/home.png')} style={{width: 16, height: 19}}/>
                            <Text style={{color: '#080808', fontSize: 14, marginLeft: 5}}>热点资讯</Text>
                        </View>
                        <Image source={require('../images/home.png')} style={{width: 8, height: 16}}/>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: "#e4e4e4"}}/>
                    <View
                        style={{
                            flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: 15,
                            paddingRight: 10, paddingTop: 5
                        }}>
                        <Image source={require('../images/home.png')} style={{width: 5, height: 5,}}/>
                        <Text style={{color: '#8f9499', fontSize: 13, marginLeft: 5, overflow: 'hidden'}}
                              numberOfLines={1}>
                            香港将迎首位女特首：出身贫寒
                            曾批“占中”乱港</Text>
                    </View>
                    <View style={{
                        flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: 15,
                        paddingRight: 10, paddingTop: 5,
                    }}>
                        <Image source={require('../images/home.png')} style={{width: 5, height: 5,}}/>
                        <Text style={{color: '#8f9499', fontSize: 13, marginLeft: 5, overflow: 'hidden'}}
                              numberOfLines={1}>
                            香港将迎首位女特首：出身贫寒 曾批“占中”乱港</Text>
                    </View>
                    <View style={{
                        flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingRight: 10,
                        paddingTop: 5, paddingBottom: 10
                    }}>
                        <Image source={require('../images/home.png')} style={{width: 5, height: 5,}}/>
                        <Text style={{color: '#8f9499', fontSize: 13, marginLeft: 5, overflow: 'hidden'}}
                              numberOfLines={1}>香港将迎首位女特首：出身贫寒 曾批“占中”乱港</Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: "#e4e4e4",}}/>
                </View>
            </View>
        )
    }

    _renderRow(rowData, sectionId, rowId) {
        if (rowId % 3 == 0) {
            return (
                <View style={styles.row}>
                    <ItemHeader/>
                    <View style={{flex: 1, paddingLeft: 10, paddingRight: 10,}}>
                        <Text style={styles.detailText}>分享了一张名片</Text>
                        <View style={styles.link}>
                            <Image source={require('../images/home.png')} />
                            <Text style={styles.linkTitle}>陈蓉的同城号名片</Text>
                        </View>
                        <Text style={styles.timeText}>9天前</Text>
                    </View>
                    <ItemFooter/>
                </View>
            )
        } else if (rowId % 3 == 1) {
            return (
                <View style={styles.row}>
                    <ItemHeader/>
                    <View style={{flex: 1, paddingLeft: 10, paddingRight: 10}}>
                        <Text
                            style={styles.detailText}>人的虚，如鬼魅一般心魔所制造的迷宫，徘徊不得出。</Text>
                        <Text style={styles.timeText}>9天前</Text>
                    </View>
                    <ItemFooter/>
                </View>
            )
        } else {
            return (
                <View style={styles.row}>
                    <ItemHeader/>
                    <View style={{flex: 1, paddingLeft: 10, paddingRight: 10}}>
                        <Text style={styles.detailText}>尽管我们被，通过地理学，去看看那绚丽缤纷的花花世界。</Text>
                        {/*<View style={styles.imgs}>*/}
                        <View>
                        <Image source={require('../images/timg.jpg')} style={styles.img}/>
                            <Image source={require('../images/timg.jpg')} style={styles.img}/>
                            <Image source={require('../images/timg.jpg')} style={styles.img}/>
                            <Image source={require('../images/timg.jpg')} style={styles.img}/>
                            <Image source={require('../images/timg.jpg')} style={styles.img}/>
                            <Image source={require('../images/timg.jpg')} style={styles.img}/>
                            <Image source={require('../images/timg.jpg')} style={styles.img}/>
                            <Image source={require('../images/timg.jpg')} style={styles.img}/>
                            <Image source={require('../images/timg.jpg')} style={styles.img}/>
                        </View>
                        <Text style={styles.timeText}>9天前</Text>
                    </View>
                    <ItemFooter/>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.hearTitle}>主页</Text>
                </View>
                <ListView dataSource={this.state.dataSource.cloneWithRows(this.props.dynamicList.dynamicList)}
                          renderRow={(rowData, sectionId, rowId) => {
                              return this._renderRow(rowData, sectionId, rowId)
                          }}
                          renderHeader={() => {
                              return this._renderHeader()
                          }}
                          showsVerticalScrollIndicator={false}
                          enableEmptySections={true}
                          initialListSize={10}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    header: {
        paddingTop: 25,
        paddingBottom: 12,
        backgroundColor: '#349bee'
    },
    hearTitle: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600'
    },
    linkTitle: {
        color: '#deffc0',
        fontSize: 16,
    },
    timeText: {
        color: '#ffa573',
        fontSize: 16,
    },
    detailText: {
        color: '#76ff38',
        fontSize: 16,
    }
});