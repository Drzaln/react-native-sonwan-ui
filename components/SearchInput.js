import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { ThemeContext } from '../context/ThemeContext'
import Container from './Container'
import Icon from './icons/Icon'

const SearchInput = () => {
	const [ searchInput, setSearchInput ] = useState('')
	const [ inputFocus, setInputFocus ] = useState(false)
	const { isDark } = useContext(ThemeContext)
	return (
		<Container style={styles.container(inputFocus, isDark)}>
			<TextInput
				onFocus={() => setInputFocus(true)}
				onBlur={() => setInputFocus(false)}
				style={styles.inputStyle(isDark)}
				onChangeText={(text) => setSearchInput(text)}
				value={searchInput}
				placeholder="Search"
				placeholderTextColor={isDark ? 'rgba(255,255,255,0.50)' : 'rgba(0,0,0,0.50)'}
			/>
			<Icon
				name="search"
				stroke={isDark ? 'rgba(255,255,255,0.50)' : 'rgba(0,0,0,0.50)'}
				viewBox="0 0 18 19"
				width={20}
			/>
		</Container>
	)
}

export default SearchInput

const styles = StyleSheet.create({
	inputStyle: (isDark) => ({ flex: 2, marginRight: 16, height: 40, color: isDark ? 'white' : 'black' }),
	container: (inputFocus, isDark) => ({
		paddingVertical: 8,
		paddingHorizontal: 16,
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: isDark ? (inputFocus ? '#08A0F7' : '#252836') : inputFocus ? '#08A0F7' : 'rgba(0,0,0,0.30)'
	})
})
