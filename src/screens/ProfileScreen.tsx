import React from "react";
import { StyleSheet, View, ImageBackground, Text, Image } from "react-native";
import stylesCommuns from "../assets/styles/stylesCommuns";
import LinearGradient from "react-native-linear-gradient"

const image = require('../assets/images/unsplash_UC0HZdUitWY.png');

const ProfileScreen = () => {
    return (
        <View style={stylesCommuns.container}>
            <LinearGradient
                colors={['#F2C94C00', '#F2C94C22', '#F2C94C44', '#F2C94CFF']}
                style={styles.linearGradiantStyle}>
            </LinearGradient>
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
