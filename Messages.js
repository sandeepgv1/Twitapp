import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Icon} from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import AppFooter from './AppFooter';

export default class App extends React.Component {
    static navigationOptions = {
        title : 'Messages',
    tabBarIcon: ({tintColor})=>{
        return <Icon name="mail" color={tintColor} indicatorStyle={{backgroundColor:'#00aced'}}/>;

    }
    }
    render() {
        return (
                <View style={{flex:1}}>
                <Text>Under Construction!</Text>
                <AppFooter/>
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
                                 lineStyle:{
                                 borderWidth: 0.5,
                                 borderColor:'black',
                                 margin:10,
                                 width:100
                                 },
                                 image: {
                                                                height: 100,
                                                                borderRadius: 50,
                                                                width: 100
                                                                },
                                 actionButtonIcon: {
                                 fontSize: 20,
                                 height: 22,
                                 color: 'white',
                                 },
                                 });