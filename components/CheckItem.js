import React, { useContext, useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { ThemeContext } from '../context/ThemeContext'
import Container from './Container'
import Icon from './icons/Icon'
import Text from './Text'

const CheckItem = () => {
	const [ isChecked, setIsChecked ] = useState(false)
	const { isDark } = useContext(ThemeContext)
	return (
		<Pressable style={styles.container} onPress={() => setIsChecked(!isChecked)}>
			<Container style={styles.checklist(isChecked, isDark)}>
				<Icon
					name="check"
					stroke={isDark ? isChecked ? '#fff' : '#2D303E' : isChecked ? '#fff' : 'rgba(174, 175, 178, 0)'}
				/>
			</Container>
			<Text>Select This</Text>
		</Pressable>
	)
}

export default CheckItem

const styles = StyleSheet.create({
	container: { flexDirection: 'row', alignItems: 'center' },
	checklist: (isChecked, isDark) => ({
		backgroundColor: isDark
			? isChecked ? '#08A0F7' : '#2D303E'
			: isChecked ? '#08A0F7' : 'rgba(174, 175, 178, 0.50)',
		borderColor: isDark
			? isChecked ? '#08A0F7' : 'rgba(255,255,255,0.15)'
			: isChecked ? '#08A0F7' : 'rgba(0,0,0,0.30)',
		borderWidth: 1,
		padding: 8,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 6,
		marginRight: 12
	})
})
