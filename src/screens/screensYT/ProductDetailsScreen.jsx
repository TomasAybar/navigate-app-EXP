import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Pressable } from 'react-native'

export default function ProductDetailsScreen() {
	const navigation = useNavigation()

	return (
		<View>
			<Pressable onPress={() => navigation.navigate('CheckoutProduct')}>
				<Text>Go to Checkout Screen</Text>
			</Pressable>
		</View>
	)
}
