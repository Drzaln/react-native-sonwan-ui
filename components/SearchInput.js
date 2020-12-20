import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import Container from './Container'
import Icon from './icons/Icon'

const SearchInput = () => {
	const [ searchInput, setSearchInput ] = useState('')
	const [ inputFocus, setInputFocus ] = useState(false)
	return (
		<Container style={styles.container(inputFocus)}>
			<TextInput
				onFocus={() => setInputFocus(true)}
				onBlur={() => setInputFocus(false)}
				style={styles.inputStyle}
				onChangeText={(text) => setSearchInput(text)}
				value={searchInput}
				placeholder="Search"
				placeholderTextColor="rgba(255,255,255,0.50)"
			/>
			<Icon name="search" stroke="rgba(255,255,255,0.50)" viewBox="0 0 18 19" width={20} />
		</Container>
	)
}

export default SearchInput

const styles = StyleSheet.create({
	inputStyle: { flex: 2, marginRight: 16, height: 40 },
	container: (inputFocus) => ({
		paddingVertical: 8,
		paddingHorizontal: 16,
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: inputFocus ? '#08A0F7' : '#252836'
	})
})
