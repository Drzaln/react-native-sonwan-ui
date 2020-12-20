import React from 'react'
import { StyleSheet, Text as RnText } from 'react-native'

const Text = ({ children, style }) => {
	return (
		<RnText style={[styles.text, style]}>{children}</RnText>
	)
}

export default Text

const styles = StyleSheet.create({
	text: { fontFamily: 'Poppins-Regular', color: 'white', fontSize: 15 }
})
