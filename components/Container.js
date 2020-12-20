import React, { useContext } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { ThemeContext } from '../context/ThemeContext'

const Container = ({ children, style, disablePress = true, onPress }) => {
	const { isDark } = useContext(ThemeContext)
	return (
		<Pressable disabled={disablePress} style={[ styles.container(isDark), style ]} onPress={onPress}>
			{children}
		</Pressable>
	)
}

export default Container

const styles = StyleSheet.create({
	container: (isDark) => ({ backgroundColor: isDark ? '#252836' : '#F4F5F9', borderRadius: 20, marginVertical: 8 })
})
