import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'
import { HomeScreen } from '../screens/HomeScreen'
import { ComprarScreen } from '../screens/ComprarScreen'
import { VenderScreen } from '../screens/VenderScreen'
import { DonarScreen } from '../screens/DonarScreen'
import { PerfilScreen } from '../screens/PerfilScreen'

const Tab = createBottomTabNavigator()

export const MainNavigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName='HomeScreen'>
				<Tab.Screen name='HomeScreen' component={HomeScreen} />
				<Tab.Screen name='ComprarScreen' component={ComprarScreen} />
				<Tab.Screen name='VenderScreen' component={VenderScreen} />
				<Tab.Screen name='DonarScreen' component={DonarScreen} />
				<Tab.Screen name='PerfilScreen' component={PerfilScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}
