import React, { useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Container from './Container'
import Icon from './icons/Icon'
import Text from './Text'

const CheckItem = () => {
	const [ isChecked, setIsChecked ] = useState(false)
	return (
		<Pressable style={styles.container} onPress={() => setIsChecked(!isChecked)}>
			<Container style={styles.checklist(isChecked)}>
				<Icon name="check" stroke={isChecked ? '#fff' : '#2D303E'} />
			</Container>
			<Text>Select This</Text>
		</Pressable>
	)
}

export default CheckItem

const styles = StyleSheet.create({
	container: { flexDirection: 'row', alignItems: 'center' },
	checklist: (isChecked) => ({
		backgroundColor: isChecked ? '#08A0F7' : '#2D303E',
		borderColor: 'rgba(255,255,255,0.15)',
		borderWidth: 1,
		padding: 8,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 6,
		marginRight: 12
	})
})
