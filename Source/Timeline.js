import React from 'react';
import { StyleSheet, Text, View,WebView ,Image,Linking, ScrollView, RefreshControl} from 'react-native';
import {Icon} from 'react-native-elements';
import AppFooter from './AppFooter';
import {Container} from 'native-base';

export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        refreshing: false,
        };
    }

    _onRefresh() {
        this.setState({refreshing: true});
        fetchData().then(() => {
                         this.setState({refreshing: false});
                         });
    }

    static navigationOptions = {
        title : 'timeline',
        tabBarIcon: ({tintColor})=>{
        return <Icon name="home" color={tintColor}/>;

        }
    }
    render() {
        return (
                <View style={{flex:1}}>
                <ScrollView style={{flex: 1}} refreshControl={<RefreshControl refreshing={this.state.refreshing} title="Pull to refresh" colors={['#00aced']}/>}>
                <WebView source={{uri: 'https://twitter.com/hashtag/MobileApps'}}  style={{height: 500}} />
                </ScrollView>
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
