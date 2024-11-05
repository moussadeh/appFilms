import React from "react";
import { StyleSheet, View } from "react-native";

const Elilipse = () => {
    return <View style={styles.circle} />
}

const styles = StyleSheet.create({
    circle : {
        width: 6,
        height: 6,
        backgroundColor: '#BDBDBD',
        marginHorizontal: 5,
        borderRadius: 3
    }
});

export default Elilipse;