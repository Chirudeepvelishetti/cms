import { View, Text ,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from '../CSS/Globalstyles'
import { useNavigation } from '@react-navigation/native'
export default function Register() {
    const navigation = useNavigation();
  return (
    <View>
    <View style={styles.homev2}>
    <TouchableOpacity style={styles.hometo} onPress={()=>navigation.navigate('types')} >
        <View>
            <Text style={styles.btext}>REGISTER YOUR COMPLAINT HERE</Text>
        </View>
        <View>
            <Image source={require('../assets/croped.gif')} style={styles.bimage}/>
        </View>
    </TouchableOpacity>     
</View>

    </View>
  )
}