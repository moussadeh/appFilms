import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ParagraphLast = ({ textColor }: any) => {
    return (
        <View style={styles.paragraphContainer}>
            <Text style={[styles.title, {color: textColor}]}>Black friday is here</Text>
            <Text style={[styles.paragraph, , {color: textColor}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sociis pulvinar auctor nibh nibh iaculis id.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    paragraphContainer: {
        width: '90%',
        height: 58,
        marginBottom: 30,
        marginTop: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    paragraph: {
        
    }
});

export default ParagraphLast;