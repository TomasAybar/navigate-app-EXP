import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

// screen
import { HomeScreen } from '../screens/HomeScreen'
import { SettingsScreen } from '../screens/ComprarScreen'
import { StackScreen } from '../screens/VenderScreen'

// icons
import { Ionicons } from '@expo/vector-icons';


// Creo mi tab navigator
const Tab = createBottomTabNavigator();

// Creo mi satack navigator
const StackHome = createNativeStackNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: 'purple'
            }}
        >
            <Tab.Screen
                name='Home'
                component={StackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-sharp" size={24} color={color} />
                    ),
                    headerShown: false
                }}
            />

            <Tab.Screen
                name='SettingsScreen'
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={24} color={color} />
                    ),
                    tabBarBadge: 4
                }}
            />
        </Tab.Navigator>
    )
}

const StackNavigator = () => {
    return (
        <StackHome.Navigator initialRouteName='HomeScreen'>
            <StackHome.Screen name='HomeScreen' component={HomeScreen} />
            <StackHome.Screen name='StackScreen' component={StackScreen} />
        </StackHome.Navigator>
    )
}

export const Navigation = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}
