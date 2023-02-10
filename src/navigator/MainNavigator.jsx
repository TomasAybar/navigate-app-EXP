import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screen
import { HomeScreen } from '../screens/HomeScreen'
import { ComprarScreen } from '../screens/ComprarScreen'
import { VenderScreen } from '../screens/VenderScreen'
import { DonarScreen } from '../screens/DonarScreen'
import { PerfilScreen } from '../screens/PerfilScreen'
import { InicioSesionScreen } from '../screens/login/InicioSesionScreen'
import { RegistroNombreScreen } from '../screens/login/RegistroNombreScreen'
import { BienvenidaScreen } from '../screens/login/BienvenidaScreen'
import { LoginScreen } from '../screens/login/LoginScreen'

const Tab = createBottomTabNavigator()

const Stack = createNativeStackNavigator()

// Tab home
const TabMain = () => {
	return (
		<Tab.Navigator
			initialRouteName='HomeScreen'
			screenOptions={{
				headerShadowVisible: false,
				headerShown: false,
			}}
		>
			<Tab.Screen name='HomeScreen' component={HomeScreen} />
			<Tab.Screen name='ComprarScreen' component={ComprarScreen} />
			<Tab.Screen name='VenderScreen' component={VenderScreen} />
			<Tab.Screen name='DonarScreen' component={DonarScreen} />
			<Tab.Screen name='PerfilScreen' component={PerfilScreen} />
		</Tab.Navigator>
	)
}

// stack login
export const MainNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='InicioSesionScreen'>
				<Stack.Screen
					name='InicioSesionScreen'
					component={InicioSesionScreen}
				/>
				<Stack.Screen
					name='RegistroNombreScreen'
					component={RegistroNombreScreen}
				/>
				<Stack.Screen
					name='BienvenidaScreen'
					component={BienvenidaScreen}
				/>

				<Stack.Screen name='LoginScreen' component={LoginScreen} />

				<Stack.Screen
					name='TabMain'
					component={TabMain}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
