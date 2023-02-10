// 4 tabs

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'
import { CartStack, ProductStack } from './StackNavigation'
import ChatBotScreen from '../screens/screensYT/ChatBotScreen'
import ProfileScreen from '../screens/screensYT/ProfileScreen'

const Tabs = createBottomTabNavigator()

const TabNavigation = () => {
	return (
		<Tabs.Navigator screenOptions={{ headerShown: false }}>
			<Tabs.Screen name='HomeTab' component={ProductStack} />
			<Tabs.Screen name='CartTab' component={CartStack} />
			<Tabs.Screen name='ChatBotTab' component={ChatBotScreen} />
			<Tabs.Screen name='ProfileTab' component={ProfileScreen} />
		</Tabs.Navigator>
	)
}

export default TabNavigation
