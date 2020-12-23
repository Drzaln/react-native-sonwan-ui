import React from 'react'
import { View, useWindowDimensions, Alert } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming
} from 'react-native-reanimated'
import Icon from './icons/Icon'
import Text from './Text'

const Swiper = () => {
	const screenWidth = useWindowDimensions().width
	const maxWidth = Math.floor(screenWidth - 100)
	const width = useSharedValue(50)
	const opacity = useSharedValue(0)
	const marginLeft = useSharedValue(0)

	const gestureHandler = useAnimatedGestureHandler({
		onStart: (_, context) => {
			context.width = width.value
			context.marginL = marginLeft.value
			opacity.value = 1
		},
		onActive: (event, context) => {
			const val = interpolate(event.translationX, [ 0, maxWidth ], [ 0, maxWidth ], Extrapolate.CLAMP)
			marginLeft.value = val
			width.value = context.width + marginLeft.value
		},
		onEnd: () => {
			width.value = withSpring(50)
			marginLeft.value = withSpring(0)
			opacity.value = withTiming(0, {
				duration: 700
			})
		}
	})
	const animatedStyle = useAnimatedStyle(() => {
		return {
			marginLeft: marginLeft.value
		}
	})
	const animatedContainer = useAnimatedStyle(() => {
		return {
			width: width.value,
			opacity: opacity.value
		}
	})
	const onHandlerStateChange = ({ nativeEvent }) => {
		if (nativeEvent.translationX > maxWidth - 20) {
			Alert.alert(
				'Payment Success!',
				'Yay!',
				[
					{
						text: ' ',
						onPress: () => console.log('Cancel Pressed'),
						style: 'cancel'
					},
					{ text: 'Okay', onPress: () => console.log('OK Pressed') }
				],
				{ cancelable: false }
			)
		}
	}

	return (
		<View>
			<View
				style={{
					borderRadius: 100,
					height: 65,
					backgroundColor: '#525298',
					padding: 8,
					alignItems: 'center',
					justifyContent: 'center'
				}}>
				<Text style={{ fontWeight: 'bold', color: 'white' }}>SWIPE TO PAY</Text>
				<Animated.View
					style={[
						{
							position: 'absolute',
							left: 8,
							height: 50,
							width: 50,
							backgroundColor: 'white',
							borderRadius: 100
						},
						animatedContainer
					]}
				/>
				<View style={{ position: 'absolute', left: 8 }}>
					<PanGestureHandler onGestureEvent={gestureHandler} onHandlerStateChange={onHandlerStateChange}>
						<Animated.View
							style={[
								{
									height: 50,
									width: 50,
									backgroundColor: 'white',
									borderRadius: 100,
									alignItems: 'center',
									justifyContent: 'center'
								},
								animatedStyle
							]}>
							<Icon name="arrow-right" width={18} stroke="#525298" />
						</Animated.View>
					</PanGestureHandler>
				</View>
			</View>
		</View>
	)
}

export default Swiper
