// screens/Page2.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Linking } from 'react-native';
import Forms from './Forms';
import Header from '../HOME/Header';
import { Provider as PaperProvider, TextInput as PaperInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; 

const { width, height } = Dimensions.get('window');

export default function Page2() {
  const navigation = useNavigation(); 

  // State for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  // State for errors
  const [errors, setErrors] = useState({ firstName: '', lastName: '', phone: '', email: '', address: '' });

  // Validation function
  const validate = () => {
    let isValid = true;
    const newErrors = { firstName: '', lastName: '', phone: '', email: '', address: '' };

    if (!firstName.trim()) {
        newErrors.firstName = 'First name is required.';
        isValid = false;
    }
    if (!lastName.trim()) {
        newErrors.lastName = 'Last name is required.';
        isValid = false;
    }
    if (!phone.trim()) {
        newErrors.phone = 'Phone number is required.';
        isValid = false;
    }
    if (!email.trim()) {
        newErrors.email = 'Email is required.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Email address is invalid.';
        isValid = false;
    }
    if (!address.trim()) {
        newErrors.address = 'Address is required.';
        isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle next button click
  const handleNext = () => {
    if (validate()) {
        navigation.navigate('page3');
    }
  };

  return (
    <View>
      <Header />
      <View style={styles.indicatorview}>
        <Forms currentStep={2} />
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
            <Text style={styles.shopheadtext}>PERSONAL DETAILS</Text>
          </View>
          <View style={styles.inputview}>
            <PaperInput
              label="First Name"
              value={firstName}
              onChangeText={text => setFirstName(text)}
              mode="outlined"
              style={styles.input}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
          </View>
          <View style={styles.inputview}>
            <PaperInput
              label="Last Name"
              value={lastName}
              onChangeText={text => setLastName(text)}
              mode="outlined"
              style={styles.input}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </View>
          <View style={styles.inputview}>
            <PaperInput
              label="Phone"
              value={phone}
              onChangeText={text => setPhone(text)}
              mode="outlined"
              style={styles.input}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </View>
          <View style={styles.inputview}>
            <PaperInput
              label="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              mode="outlined"
              style={styles.input}
              error={!!errors.email}
              helperText={errors.email}
            />
          </View>
          <View style={styles.inputview}>
            <PaperInput
              label="Address"
              value={address}
              onChangeText={text => setAddress(text)}
              mode="outlined"
              style={styles.input}
              error={!!errors.address}
              helperText={errors.address}
            />
          </View>
          <View style={styles.buttonview}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.buttontext}>BACK</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNext}>
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
    paddingHorizontal: width * 0.10,
    borderRadius: 10
  },
  buttonview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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