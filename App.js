import 'react-native-gesture-handler';
import * as React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}


