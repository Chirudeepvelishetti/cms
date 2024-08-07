import { View, Text} from 'react-native'
import React from 'react'
import styles from '../CSS/Globalstyles'
import * as Animatable from 'react-native-animatable';
import ComplaintButtons from './ComplaintButtons';
import Register from './Register';




export default function Slider() {
  return (
    <View>
    <View style={styles.sliderbg}>
    <Animatable.Image animation='fadeInRight'  duration={3000} source={require('../assets/image1.png')} style={styles.sliderimage} />
    </View>
    
    <Register />
    </View>
  )
}