import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Switch from './Switch'
import Text from './Text'

const TextedSwitch = () => {
	const [ switchState, setSwitchState ] = useState(false)
	const handleOnPressSwitch = (value) => {
		setSwitchState(value)
	}
	return (
		<View style={styles.container}>
			<Text>Dark Mode</Text>
			<Switch handleOnPress={handleOnPressSwitch} value={switchState} />
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
