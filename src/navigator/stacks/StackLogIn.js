import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import { InicioSesionScreen } from '../../screens/login/InicioSesionScreen';
import { RegistroNombreScreen } from '../../screens/login/RegistroNombreScreen';
import { BienvenidaScreen } from '../../screens/login/BienvenidaScreen';


// Creo mi stack
const Stack = createNativeStackNavigator();

export const StackLogin = () => {

    return (
        <Stack.Navigator initialRouteName='InicioSesionScreen'>
            <Stack.Screen name='InicioSesionScreen' component={InicioSesionScreen} />
            <Stack.Screen name='RegistroNombreScreen' component={RegistroNombreScreen} />
            <Stack.Screen name='BienvenidaScreen' component={BienvenidaScreen} />
        </Stack.Navigator>
    )

}

