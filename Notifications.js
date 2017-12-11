import React from 'react';
import { StyleSheet, View, Text, WebView } from 'react-native';
import {Icon} from 'react-native-elements';
import AppFooter from './AppFooter';

export default class App extends React.Component {
    static navigationOptions = {
        title : 'Notifications',
    tabBarIcon: ({tintColor})=>{
        return <Icon name="notifications" color={tintColor}/>;

        }
    }
    render() {
        return (
                <View style={{flex:1}}>
                <Text>Under Construction!</Text>
                <AppFooter />
                </View>
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