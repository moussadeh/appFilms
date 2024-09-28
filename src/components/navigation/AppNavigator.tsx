import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../../screens/HomeScreen";
import SearchScreen from "../../screens/SearchScreen";
import WishListScreen from "../../screens/WishListScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'yellow', tabBarInactiveTintColor: 'black', headerShown: false }}>
                <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({color, size}) => (<Icon name="home" color={color} size={size} />)}}></Tab.Screen>
                <Tab.Screen name="Search" component={SearchScreen} options={{tabBarIcon: ({color, size}) => (<Icon name="search" color={color} size={size} />)}}></Tab.Screen>
                <Tab.Screen name="WishList" component={WishListScreen} options={{tabBarIcon: ({color, size}) => (<Icon name="heart" color={color} size={size} />)}}></Tab.Screen>
                <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon: ({color, size}) => (<Icon name="person" color={color} size={size} />)}}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;