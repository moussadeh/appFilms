import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const BoutonLarg = ({bgColor, text}: any) => {
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
        width: '90%',
        height: 48,
        borderRadius: 8,
    },
    boutonText: {
        color: 'white',
        textAlign: 'center'
    }
})

export default BoutonLarg;