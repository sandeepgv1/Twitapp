import React from 'react';
import {StyleSheet, Text, WebView } from 'react-native';
import {Container, Header, Item, Input, Button } from 'native-base';
import {Icon} from 'react-native-elements';
import AppFooter from './AppFooter';

export default class App extends React.Component {
    static navigationOptions = {
    /*header: {
    visible: false
    },
    header: ({ navigate }) => {
        title = "Search";
    },*/
        title : 'search',
    tabBarIcon: ({tintColor})=>{
        return <Icon name="search" color={tintColor}/>;

    }
    }
    render() {
        let source= 'https://twitter.com/hashtag/MobileApps';
        return (
                <Container>
                <WebView source={{uri:source}} javaScriptEnabled={true}/>
                </Container>
                );
    }
}

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 backgroundColor: '#fff',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 },

                                 });