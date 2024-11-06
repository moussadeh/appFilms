import React from "react";
import { Text, View } from "react-native";
import stylesCommuns from "../assets/styles/stylesCommuns";
import { useTheme } from "@react-navigation/native";

const WishListScreen = () => {
    const { colors } = useTheme();

    return (
        <View style={stylesCommuns.container}>
            <Text style={{ color: colors.text }}>WishList</Text>
        </View>
    )
}

export default WishListScreen;