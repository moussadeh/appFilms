import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../../screens/HomeScreen";
import SearchScreen from "../../screens/SearchScreen";
import WishListScreen from "../../screens/WishListScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, useColorScheme } from "react-native";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    const theme = useColorScheme();
    const isDark = theme === 'dark';

    const customTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: isDark ? 'black' : 'white',
            text: isDark ? 'white' : 'black',
            card: isDark ? 'black' : 'white',
            primary: '#F2C94C',
            border: isDark ? 'black' : 'white',
            gradiant: isDark ? ['black', 'transparent'] :  ['#FFFFFF', 'transparent']
        },
    };

    return (
        <NavigationContainer theme={customTheme}>
            <Tab.Navigator screenOptions={{ 
                tabBarActiveTintColor: '#F2C94C', 
                tabBarInactiveTintColor: isDark ? 'white' : '#333333', 
                headerShown: false, 
                tabBarStyle: {backgroundColor: customTheme.colors.card, 
                borderColor: customTheme.colors.border} }}
            >
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: ({color, size}) => (<Icon name="home" color={color} size={size} />)}}
                ></Tab.Screen>
                <Tab.Screen name="Search" component={SearchScreen} options={{
                    tabBarIcon: ({color, size}) => (<Icon name="search-outline" color={color} size={size} />)}}
                ></Tab.Screen>
                <Tab.Screen name="WishList" component={WishListScreen} options={{
                    tabBarIcon: ({color, size}) => (<Icon name="bookmark-outline" color={color} size={size} />)}}
                ></Tab.Screen>
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarIcon: ({color, size}) => (<Icon name="person-outline" color={color} size={size} />)}}
                ></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;