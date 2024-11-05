import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ParagraphLast = () => {
    return (
        <View style={styles.paragraphContainer}>
            <Text style={styles.title}>Black friday is here</Text>
            <Text style={styles.paragraph}>qsvcye ceycec eegdugd eucedjazdhe eugzedgede euygdadhzaudg eggedddvijvu ehdjziddzudd jdheeddde eeeddjeeee effeyyfefbehff heb hfefe</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    paragraphContainer: {
        width: '90%',
        height: 58,
        marginBottom: 40,
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