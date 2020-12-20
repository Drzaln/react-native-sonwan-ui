/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import { ThemeController } from './context/ThemeContext'

const One = () => (
	<ThemeController>
		<App />
	</ThemeController>
)

AppRegistry.registerComponent(appName, () => One)
