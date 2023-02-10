// import { createStackNavigator } from '@react-navigation/stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/HomeScreen'
import { SettingsScreen } from '../screens/ComprarScreen'

const Stack = createNativeStackNavigator()

export const StackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='HomeScreen' component={HomeScreen} />
			<Stack.Screen name='SettingsScreen' component={SettingsScreen} />
		</Stack.Navigator>
	)
}
