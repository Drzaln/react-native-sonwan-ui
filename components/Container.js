import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

const Container = ({ children, style, disablePress = true, onPress }) => {
	return (
		<Pressable disabled={disablePress} style={[ styles.container, style ]} onPress={onPress}>
			{children}
		</Pressable>
	)
}

export default Container

const styles = StyleSheet.create({
	container: { backgroundColor: '#252836', borderRadius: 20, marginVertical: 8 }
})
