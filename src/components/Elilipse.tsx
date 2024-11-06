import React from "react";
import { StyleSheet, View } from "react-native";

const Elilipse = ({ isSelected } : any) => {
    return <View style={[styles.circle, isSelected && { backgroundColor: '#F2C94C' }]} />
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