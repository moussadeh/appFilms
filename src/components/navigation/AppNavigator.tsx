import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../../screens/HomeScreen";
import SearchScreen from "../../screens/SearchScreen";
import WishListScreen from "../../screens/WishListScreen";
import ProfileScreen from "../../screens/ProfileScreen";


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'yellow', tabBarInactiveTintColor: 'black', headerShown: false }}>
                <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
                <Tab.Screen name="Search" component={SearchScreen}></Tab.Screen>
                <Tab.Screen name="WishList" component={WishListScreen}></Tab.Screen>
                <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;