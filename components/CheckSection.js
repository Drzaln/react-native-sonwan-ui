import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Container from './Container'
import Icon from './icons/Icon'
import Text from './Text'

const CheckSection = () => {
	const [ isChecked, setIsChecked ] = useState(false)
	return (
		<Container style={styles.checkSection(isChecked)} disablePress={false} onPress={() => setIsChecked(!isChecked)}>
			<Container style={styles.iconContainer}>
				<Icon name="profile" fill="#fff" />
			</Container>
			<View style={styles.textContainer}>
				<Text style={styles.title}>Personal Account</Text>
				<Text style={styles.subTitle}>**** - **** - 9876</Text>
			</View>
			<Container style={styles.checkContainer(isChecked)}>
				<Icon name="check" stroke={isChecked ? '#fff' : '#2D303E'} width={16} />
			</Container>
		</Container>
	)
}

export default CheckSection

const styles = StyleSheet.create({
	checkSection: (isChecked) => ({
		padding: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderWidth: 1,
		borderColor: isChecked ? '#08A0F7' : '#252836'
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
	subTitle: { fontSize: 12, color: 'rgba(255,255,255,0.50)' },
	checkContainer: (isChecked) => ({
		flex: 1,
		backgroundColor: isChecked ? '#08A0F7' : '#2D303E',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		borderRadius: 100,
		marginVertical: 0,
		borderColor: 'rgba(255,255,255,0.15)',
		borderWidth: 1
	})
})
