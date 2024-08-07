import { View, Text ,TouchableOpacity , Image } from 'react-native'
import React from 'react'
import Header from './Header'
import Headerone from './Headerone'
import ComplaintButtons from './ComplaintButtons'
import styles from '../CSS/Globalstyles'
import Footer from './Footer'
import { useNavigation } from '@react-navigation/native'
export default function Complainttypes() {
    const navigation = useNavigation();
  return (
    <View>
      <Header />
      <Headerone />
      <View style={styles.bg1}>
      <View>
            <ComplaintButtons />
      </View>
      <View style={styles.homev2}>
            <TouchableOpacity style={styles.hometo} onPress={()=>navigation.navigate('screen')} >
                <View>
                    <Text style={styles.btext}>REGISTER YOUR COMPLAINT MANUALLY</Text>
                </View>
                <View>
                    <Image source={require('../assets/croped.gif')} style={styles.bimage}/>
                </View>
            </TouchableOpacity>     
        </View>

      </View>
      <Footer />
    </View>
  )
}