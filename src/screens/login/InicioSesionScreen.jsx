import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const InicioSesionScreen = () => {
	const navigation = useNavigation()

	return (
		<View>
			<Text>InicioSesionScreen</Text>
			<TouchableOpacity>
				<Button
					title='Registrarme'
					onPress={() => alert('registrarme')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button
					title='Iniciar sesion - ir a registro'
					onPress={() => navigation.navigate('RegistroNombreScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}
