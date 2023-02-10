import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const InicioSesionScreen = () => {
	const navigator = useNavigation()

	return (
		<View>
			<Text>InicioSesionScreen</Text>
			<TouchableOpacity>
				<Button
					title='Registrarme'
					onPress={() => navigator.navigate('RegistroNombreScreen')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button
					title='Iniciar sesion - ir a registro'
					onPress={() => navigator.navigate('LoginScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}
