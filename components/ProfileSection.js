import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Container from './Container'
import Icon from './icons/Icon'
import Text from './Text'

const ProfileSection = () => {
	const [ isChecked, setIsChecked ] = useState(false)
	return (
		<Container style={styles.profileSection} disablePress={false} onPress={() => setIsChecked(!isChecked)}>
			<Container style={styles.imageContainer}>
				<Image style={styles.image} source={{ uri: 'https://randomuser.me/api/portraits/men/43.jpg' }} />
			</Container>
			<View style={styles.textContainer}>
				<Text style={styles.title}>Thomas Wise</Text>
				<Text style={styles.subTitle}>0821 - 7654 - 3210</Text>
			</View>
			<Container style={styles.iconContainer}>
				<Icon name="profile" fill="#fff" />
			</Container>
		</Container>
	)
}

export default ProfileSection

const styles = StyleSheet.create({
	profileSection: {
		padding: 20,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	imageContainer: {
		flex: 1.8,
		backgroundColor: '#FFBF47',
		alignItems: 'center',
		justifyContent: 'center',
		height: 40,
		borderRadius: 100,
		marginVertical: 0
	},
	image: {
		height: '100%',
		width: 40,
		borderRadius: 100
	},
	textContainer: { flex: 10, marginHorizontal: 14 },
	title: { fontSize: 14 },
	subTitle: { fontSize: 12, color: 'rgba(255,255,255,0.50)' },
	iconContainer: {
		flex: 1,
		backgroundColor: '#2F3142',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		borderRadius: 13,
		marginVertical: 0
	}
})
