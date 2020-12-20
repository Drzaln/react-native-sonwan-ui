import React, { useContext } from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CheckItem from './components/CheckItem'
import CheckSection from './components/CheckSection'
import ProfileSection from './components/ProfileSection'
import RecentContact from './components/RecentContact'
import SearchInput from './components/SearchInput'
import Swiper from './components/Swiper'
import TextedSwitch from './components/TextedSwitch'
import { ThemeContext } from './context/ThemeContext'

const App = () => {
	const { isDark } = useContext(ThemeContext)
	return (
		<React.Fragment>
			<StatusBar
				backgroundColor={isDark ? '#1F1D2A' : '#fff'}
				barStyle={isDark ? 'light-content' : 'dark-content'}
			/>
			<ScrollView
				keyboardShouldPersistTaps="handled"
				style={styles.container(isDark)}
				contentContainerStyle={styles.contentContainer}>
				<SearchInput />
				<ProfileSection />
				<CheckSection />
				<RecentContact />
				<CheckItem />
				<TextedSwitch />
				<Swiper />
			</ScrollView>
		</React.Fragment>
	)
}

export default App

const styles = StyleSheet.create({
	container: (isDark) => ({ flex: 1, backgroundColor: isDark ? '#1F1D2A' : '#fff', paddingHorizontal: 16 }),
	contentContainer: { paddingTop: 16, paddingBottom: 24 }
})
