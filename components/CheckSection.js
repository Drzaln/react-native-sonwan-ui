import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemeContext } from '../context/ThemeContext'
import Container from './Container'
import Icon from './icons/Icon'
import Text from './Text'

const CheckSection = () => {
	const [ isChecked, setIsChecked ] = useState(false)
	const { isDark } = useContext(ThemeContext)
	return (
		<Container
			style={styles.checkSection(isChecked, isDark)}
			disablePress={false}
			onPress={() => setIsChecked(!isChecked)}>
			<Container style={styles.iconContainer}>
				<Icon name="profile" fill="#fff" />
			</Container>
			<View style={styles.textContainer}>
				<Text style={styles.title}>Personal Account</Text>
				<Text style={styles.subTitle(isDark)}>**** - **** - 9876</Text>
			</View>
			<Container style={styles.checkContainer(isChecked, isDark)}>
				<Icon
					name="check"
					stroke={isDark ? isChecked ? '#fff' : '#2D303E' : isChecked ? '#fff' : 'rgba(174, 175, 178, 0)'}
					width={16}
				/>
			</Container>
		</Container>
	)
}

export default CheckSection

const styles = StyleSheet.create({
	checkSection: (isChecked, isDark) => ({
		padding: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderWidth: 1,
		borderColor: isDark ? (isChecked ? '#08A0F7' : '#252836') : isChecked ? '#08A0F7' : '#F4F5F9'
	}),
	iconContainer: {
		flex: 1,
		backgroundColor: '#FFBF47',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		borderRadius: 13,
		marginVertical: 0
	},
	textContainer: { flex: 10, marginHorizontal: 14 },
	title: { fontSize: 14 },
	subTitle: (isDark) => ({ fontSize: 12, color: isDark ? 'rgba(255,255,255,0.50)' : 'rgba(0,0,0,0.50)' }),
	checkContainer: (isChecked, isDark) => ({
		flex: 1,
		backgroundColor: isDark
			? isChecked ? '#08A0F7' : '#2D303E'
			: isChecked ? '#08A0F7' : 'rgba(174, 175, 178, 0.50)',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		borderRadius: 100,
		marginVertical: 0,
		borderColor: isDark
			? isChecked ? '#08A0F7' : 'rgba(255,255,255,0.15)'
			: isChecked ? '#08A0F7' : 'rgba(0,0,0,0.30)',
		borderWidth: 1
	})
})
