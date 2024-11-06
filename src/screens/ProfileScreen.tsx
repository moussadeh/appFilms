import React, { useState } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import stylesCommuns from "../assets/styles/stylesCommuns";
import { useTheme } from "@react-navigation/native";

const ProfileScreen = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const { colors } = useTheme();

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <View style={[stylesCommuns.container, { backgroundColor: colors.background }]}>
            <Text style={{ color: colors.text }}>Acttiver / Désactiver Mode sombre</Text>
            <Switch value={isSwitchOn} onValueChange={setIsSwitchOn} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    boutonStyle: {

    }
});

export default ProfileScreen;
