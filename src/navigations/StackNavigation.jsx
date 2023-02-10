// 1. Main Stack 2. Product Stack 3. Card Stack

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StartUpScreen from '../screens/screensYT/StartUpScreen'
import HomeScreen from '../screens/screensYT/HomeScreen'
import ProductDetailsScreen from '../screens/screensYT/ProductDetailsScreen'
import CheckoutScreen from '../screens/screensYT/CheckoutScreen'
import PaymentScreen from '../screens/screensYT/PaymentScreen'
import CartScreen from '../screens/screensYT/CartScreen'
import TabNavigation from './TabNavigation'

const Stack = createNativeStackNavigator()

const StackMain = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName='Tabs'
		>
			<Stack.Screen name='StartUp' component={StartUpScreen} />
			<Stack.Screen name='Tabs' component={TabNavigation} />
		</Stack.Navigator>
	)
}

const ProductStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='Details' component={ProductDetailsScreen} />
			<Stack.Screen name='CheckoutProduct' component={CheckoutScreen} />
			<Stack.Screen name='PaymentProduct' component={PaymentScreen} />
		</Stack.Navigator>
	)
}

const CartStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Cart' component={CartScreen} />
			<Stack.Screen name='CheckoutCart' component={CheckoutScreen} />
			<Stack.Screen name='PaymentCart' component={PaymentScreen} />
		</Stack.Navigator>
	)
}

export { StackMain, ProductStack, CartStack }
