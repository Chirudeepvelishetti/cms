import { View, Text, StyleSheet,Image} from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import styles from '../CSS/Globalstyles'
export default function Splash() {
  return (
    <View style={styles.splashcontainer}>
        <View>
        <Animatable.Image source={require('../assets/RidhitekLogo.png')} style={styles.splashimage} animation='zoomInUp' duration={3000}/>
        </View>
        {/* <View>
            <Animatable.Text animation='zoomIn' delay={1000} style={styles.splashtext}>ECMS</Animatable.Text>
        </View> */}
    </View>
  )
}
