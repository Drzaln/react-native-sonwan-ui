import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemeContext } from '../context/ThemeContext'
import Switch from './Switch'
import Text from './Text'

const TextedSwitch = () => {
	const { isDark, setIsDark } = useContext(ThemeContext)
	const handleOnPressSwitch = (value) => {
		setIsDark(value)
	}
	return (
		<View style={styles.container}>
			<Text>Dark Mode</Text>
			<Switch handleOnPress={handleOnPressSwitch} value={isDark} inActiveTrackColor="#AEAFB2" />
		</View>
	)
}

export default TextedSwitch

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 16
	}
})
