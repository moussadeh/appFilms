import React from "react";
import { StyleSheet, View, ImageBackground, Text, Image } from "react-native";
import stylesCommuns from "../assets/styles/stylesCommuns";

const image = require('../assets/images/unsplash_UC0HZdUitWY.png');

const ProfileScreen = () => {
    return (
        <View style={stylesCommuns.container}>
            <Text>Profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    imageBackgroundStyl : {
        width : '100%',
        height: '80%'
    },
    linearGradiantStyle: {
        height: 150,
        width: "100%"
    }
});

export default ProfileScreen;
