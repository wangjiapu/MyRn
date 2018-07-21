import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Home extends Component<Props> {
    constructor(props){
        super(props);
        this.state={
            selectedTab:'首页',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Home
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});