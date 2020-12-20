
import React, { useState, useMemo } from 'react'

const initialState = {
	isDark: true,
	setIsDark: () => {}
}

export const ThemeContext = React.createContext(initialState)

export const { Provider: ThemeProvider, Consumer: ThemeConsumer } = ThemeContext

export const ThemeController = ({ children }) => {
	const [ isDark, setIsDark ] = useState(true)

	return useMemo(
		() => (
			<ThemeProvider
				value={{
					isDark,
					setIsDark
				}}>
				{children}
			</ThemeProvider>
		),
		[ isDark ]
	)
}