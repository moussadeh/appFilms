import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";

const Bouton = ({bgColor, text}: any) => {
    return (
        <TouchableOpacity style={[styles.bouton, { backgroundColor: bgColor }]}>
            <Text style={styles.boutonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    bouton: {
        paddingHorizontal: 32,
        paddingVertical: 14,
    },
    boutonText: {

    }
})

export default Bouton;