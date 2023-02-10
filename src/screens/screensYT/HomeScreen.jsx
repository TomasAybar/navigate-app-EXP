import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Pressable } from 'react-native'

export default function HomeScreen() {
	const navigation = useNavigation()

	return (
		<View>
			<Pressable onPress={() => navigation.navigate('Details')}>
				<Text>Go to Products</Text>
			</Pressable>
		</View>
	)
}
