import Expo from "expo";
import React from "react";

import { Platform, Text } from "react-native";
import { Root } from "native-base";

import Home from "./Home";


export default class App1 extends React.Component {
    constructor() {
        super();
        this.state = {
        isReady: false
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
                                  Roboto: require("native-base/Fonts/Roboto.ttf"),
                                  Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
                                  Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
                                  });

        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }
        return <Home/>;
    }
}