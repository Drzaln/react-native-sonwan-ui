import React, { useContext } from 'react'
import { StyleSheet, Text as RnText } from 'react-native'
import { ThemeContext } from '../context/ThemeContext'

const Text = ({ children, style }) => {
	const { isDark } = useContext(ThemeContext)
	return <RnText style={[ styles.text(isDark), style ]}>{children}</RnText>
}

export default Text

const styles = StyleSheet.create({
	text: (isDark) => ({ fontFamily: 'Poppins-Regular', color: isDark ? 'white' : 'black', fontSize: 15 })
})
