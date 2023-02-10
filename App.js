import 'react-native-gesture-handler';
import * as React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { Navigation } from './src/navigator/Navigation';
import { StackLogin } from './src/navigator/stacks/StackLogIn';
import { MainNavigator } from './src/navigator/MainNavigator';

export default function App() {
  return (


    <MainNavigator />
  );
}

// <Navigation />
// <NavigationContainer>
{/* <StackNavigator /> */ }
{/* <StackLogin /> */ }
{/* </NavigationContainer> */ }
