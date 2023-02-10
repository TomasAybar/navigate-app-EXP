import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackMain } from './StackNavigation'

export class MainNavigation extends Component {
	render() {
		return (
			<NavigationContainer>
				<StackMain />
			</NavigationContainer>
		)
	}
}

export default MainNavigation
