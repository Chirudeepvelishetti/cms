import { View, Text, Linking } from 'react-native'
import React from 'react'
import styles from '../CSS/Globalstyles'
export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.hometext3} onPress={() => { Linking.openURL('https://www.ridhitek.com') }}>@ Powered By <Text style={{ color: 'green' }}>Ridhitek</Text></Text>
    </View>
  )
}