import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CheckItem from './components/CheckItem'
import CheckSection from './components/CheckSection'
import ProfileSection from './components/ProfileSection'
import RecentContact from './components/RecentContact'
import SearchInput from './components/SearchInput'
import Swiper from './components/Swiper'
import TextedSwitch from './components/TextedSwitch'

const App = () => {
	return (
		<React.Fragment>
			<StatusBar backgroundColor="#1F1D2A" barStyle="light-content" />
			<ScrollView
				keyboardShouldPersistTaps="handled"
				style={styles.container}
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
	container: { flex: 1, backgroundColor: '#1F1D2A', paddingHorizontal: 16 },
	contentContainer: { paddingTop: 16, paddingBottom: 24 }
})
