import React from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const BienvenidaScreen = () => {
	return (
		<View>
			<Text>BienvenidaScreen</Text>

			<TouchableOpacity>
				<Button title='Continuar' onPress={() => alert('bienvenida')} />
			</TouchableOpacity>
		</View>
	)
}
