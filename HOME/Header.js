import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from '../CSS/Globalstyles'
export default function Header() {
  return (
    <View>
      <View style={styles.headercontainer}>
      <View style={styles.headerlogoview}>
          <Image source={require('../assets/RidhitekLogo.png')} style={styles.headerimage} />
      </View>
      <View style={styles.headerlogoview1}>
          <Text style={styles.headertext}>COMPLAINT MANAGEMENT SYSTEM</Text>
          <Text style={styles.headertext1}>Empowering voices, enhancing solutions</Text>
      </View>
  </View>
      </View>
  )
}