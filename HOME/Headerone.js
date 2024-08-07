import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../CSS/Globalstyles'
import Entypo from 'react-native-vector-icons/Entypo';
const { width, height } = Dimensions.get('window');
export default function Headerone({ navigation }) {
    return (
        <View style={styles.headeroneconatiner}>
            <View style={styles.headeronetextcont}>
                <View>
                    <Entypo name='mail' size={width * 0.05} style={styles.entypo} />
                </View>
                <View>
                    <Text style={styles.headeronetext}>excisecms@gmail.com</Text>
                </View>

            </View>
            <View>
                <TouchableOpacity onPress={() => { navigation.navigate('login') }}>
                    <Text style={styles.headerlogin}>LOGIN </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}