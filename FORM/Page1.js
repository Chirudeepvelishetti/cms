// screens/Page1.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Linking } from 'react-native';
import Forms from './Forms';
import Header from '../HOME/Header';
import { Provider as PaperProvider, TextInput as PaperInput } from 'react-native-paper';

const { width } = Dimensions.get('window');

export default function Page1({ navigation, route }) {
  const { qrData, scannedData } = route.params; // Updated to include scannedData

  const [shopName, setShopName] = useState('sindhu wines');
  const [district, setDistrict] = useState('jangaon');
  const [mandal, setMandal] = useState('jangaon');
  const [village, setVillage] = useState('jangaon');
  const [pincode, setPincode] = useState('506167');

  useEffect(() => {
    if (qrData) {
      setDistrict(qrData.district);
      setMandal(qrData.mandal);
      setVillage(qrData.village);
      setPincode(qrData.pincode);
    } else if (scannedData) {
      // Assuming scannedData is an object with the relevant fields
      setDistrict(scannedData.district);
      setMandal(scannedData.mandal);
      setVillage(scannedData.village);
      setPincode(scannedData.pincode);
    }
  }, [qrData, scannedData]); // Added scannedData to dependencies

  return (
    <View>
      <Header />
      <View style={styles.indicatorview}>
        <Forms currentStep={1} />
      </View>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          keyboardShouldPersistTaps='handled'
          showsVerticalScrollIndicator={false}
        >
          <View style={{ paddingBottom: width * 0.08 }}>
            <Text style={styles.shopheadtext}>SHOP DETAILS</Text>
          </View>
          <View style={styles.inputview}>
            <PaperInput
              label="Shop Name"
              value={shopName}
              onChangeText={setShopName}
              mode="outlined"
              style={styles.input}
            />
          </View>
          <View style={styles.inputview}>
            <PaperInput
              label="District"
              value={district}
              onChangeText={setDistrict}
              mode="outlined"
              style={styles.input}
            />
          </View>
          <View style={styles.inputview}>
            <PaperInput
              label="Mandal"
              value={mandal}
              onChangeText={setMandal}
              mode="outlined"
              style={styles.input}
            />
          </View>
          <View style={styles.inputview}>
            <PaperInput
              label="Village"
              value={village}
              onChangeText={setVillage}
              mode="outlined"
              style={styles.input}
            />
          </View>
          <View style={styles.inputview}>
            <PaperInput
              label="Pincode"
              value={pincode}
              onChangeText={setPincode}
              mode="outlined"
              style={styles.input}
            />
          </View>
          <View style={styles.buttonview}>
            <TouchableOpacity onPress={() => navigation.navigate('page2')}>
              <Text style={styles.buttontext}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.footer}>
        <Text style={styles.hometext3} onPress={() => { Linking.openURL('https://www.ridhitek.com') }}>@ Powered By <Text style={{ color: 'green' }}>Ridhitek</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
  },
  shopheadtext: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    backgroundColor: '#070720',
    color: 'white',
    textAlign: 'center',
    padding: width * 0.02,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 20
  },
  indicatorview: {
    paddingTop: width * 0.06,
    paddingBottom: width * 0.01,
    backgroundColor: 'white',
    marginHorizontal: width * 0.01,
  },
  inputview: {
    paddingHorizontal: width * 0.08,
    paddingVertical: width * 0.01,
    marginVertical: width * 0.01
  },
  buttontext: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#070720',
    textAlign: 'center',
    paddingVertical: width * 0.02,
    borderRadius: 10
  },
  buttonview: {
    width: width * 0.30,
    marginLeft: width * 0.60,
    marginTop: width * 0.10,
    marginBottom: width * 0.05
  },
  container: {
    backgroundColor: 'white',
    marginHorizontal: width * 0.03,
    marginTop: width * 0.06,
    marginBottom: width * 0.08,
    elevation: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  hometext3: {
    fontSize: width * 0.03,
    fontWeight: '300',
    textAlign: 'center',
    paddingVertical: width * 0.05,
    backgroundColor: '#070720',
    color: 'white',
    borderRadius: 5,
    marginTop: width * 0.00
  },
  footer: {
    paddingTop: width * 0.00
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});
