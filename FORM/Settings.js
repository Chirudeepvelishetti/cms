import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, Linking, Image, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Header from '../HOME/Header';
import { Provider as PaperProvider, TextInput as PaperInput } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import VoiceRecorder from './VoiceRecorder';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const Settings = () => {
  const navigation = useNavigation(); 
  const [currentStep, setCurrentStep] = useState(0);
  const [imageUri, setImageUri] = useState(null);
  const [shopName, setShopName] = useState('');
  const [district, setDistrict] = useState('');
  const [mandal, setMandal] = useState('');
  const [village, setVillage] = useState('');
  const [pincode, setPincode] = useState('');
  const [recording, setRecording] = useState(false);
  const [recordedFile, setRecordedFile] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [shopNameError, setShopNameError] = useState('');
const [districtError, setDistrictError] = useState('');
const [mandalError, setMandalError] = useState('');
const [villageError, setVillageError] = useState('');
const [pincodeError, setPincodeError] = useState('');

 
  

  const steps = ['Shop details', 'Personal details', 'Attachment', 'Submit'];
  const handleFinish = () => {
    setModalVisible(true);
    // Add your form submission logic here
  };
  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('home'); // Navigate to HomePage
  };

  const handleShopNameChange = text => {
    setShopName(text);
    setShopNameError('');
  };
  
  const handleDistrictChange = text => {
    setDistrict(text);
    setDistrictError('');
  };
  
  const handleMandalChange = text => {
    setMandal(text);
    setMandalError('');
  };
  
  const handleVillageChange = text => {
    setVillage(text);
    setVillageError('');
  };
  
  const handlePincodeChange = text => {
    setPincode(text);
    setPincodeError('');
  };


  const validateStep = () => {
    let isValid = true;
  
    if (currentStep === 0) {
      if (!shopName) {
        setShopNameError('Shop Name is required');
        isValid = false;
      }
      if (!district) {
        setDistrictError('District is required');
        isValid = false;
      }
      if (!mandal) {
        setMandalError('Mandal is required');
        isValid = false;
      }
      if (!village) {
        setVillageError('Village is required');
        isValid = false;
      }
      if (!pincode) {
        setPincodeError('Pincode is required');
        isValid = false;
      }
    }
  
    // Add similar validation for other steps if needed
  
    return isValid;
  };
  
  const handleNextStep = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  

  const handleImage = async () => {
    let imagePick = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(imagePick);
    if (!imagePick.canceled && Array.isArray(imagePick.assets) && imagePick.assets.length > 0) {
      setImageUri(imagePick.assets[0].uri);
    } else {
      console.log('Image selection was canceled or no image assets found.');
    }
  };

  const handleCamera = async () => {
    const cam = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(cam);
    if (!cam.canceled && Array.isArray(cam.assets) && cam.assets.length > 0) {
      setImageUri(cam.assets[0].uri);
    } else {
      console.log('Image not uploaded');
    }
  };

  return (
    <SafeAreaProvider>
       <Header />
       <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
      <PaperProvider>
      
        <View style={{  flexDirection: 'column', backgroundColor: '#f6f6f6', flex:1}}>
         
          {/* Steps */}
         
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <View style={{ width: 280, height: 90 }}>
              <View style={{ alignItems: 'center' }}>
                <View style={{ height: 2, backgroundColor: '#070720', width: 180, position: 'absolute', top: 13, zIndex: 10 }} />
              </View>
              <View style={{ flexDirection: 'row', width: '100%', position: 'absolute', zIndex: 20 }}>
                {steps.map((label, i) => (
                  <View key={i} style={{ alignItems: 'center', width: 70 }}>
                    {i > currentStep && i !== currentStep && (
                      <View style={[styles.step, styles.notSelected]}>
                        <Text style={styles.stepText}>{i + 1}</Text>
                      </View>
                    )}
                    {i < currentStep && (
                      <View style={[styles.step, styles.checked]}>
                        <Ionicons name="checkmark-outline" size={20} color="#fff" />
                      </View>
                    )}
                    {i === currentStep && (
                      <View style={[styles.step, styles.selected]}>
                        <Text style={styles.selectedText}>{i + 1}</Text>
                      </View>
                    )}
                    <Text style={{ fontSize: 12 }}>{label}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* Step Content */}
       
          <View style={{ backgroundColor: '#fff'}}>
     
            {currentStep === 0 && (
                 
          <View style={{ height: '66%', alignSelf: 'center', paddingHorizontal: 20, paddingVertical: 20 }}>
          <Text style={{ fontSize: 30, marginBottom: 20, textAlign: 'center' }}>Shop Details</Text>
          <PaperInput
            label="Shop Name"
            value={shopName}
            onChangeText={handleShopNameChange}
            mode="outlined"
            style={styles.input}
            error={!!shopNameError}
          />
          {shopNameError ? <Text style={styles.errorText}>{shopNameError}</Text> : null}
          <PaperInput
            label="District"
            value={district}
            onChangeText={handleDistrictChange}
            mode="outlined"
            style={styles.input}
            error={!!districtError}
          />
          {districtError ? <Text style={styles.errorText}>{districtError}</Text> : null}
          <PaperInput
            label="Mandal"
            value={mandal}
            onChangeText={handleMandalChange}
            mode="outlined"
            style={styles.input}
            error={!!mandalError}
          />
          {mandalError ? <Text style={styles.errorText}>{mandalError}</Text> : null}
          <PaperInput
            label="Village"
            value={village}
            onChangeText={handleVillageChange}
            mode="outlined"
            style={styles.input}
            error={!!villageError}
          />
          {villageError ? <Text style={styles.errorText}>{villageError}</Text> : null}
          <PaperInput
            label="Pincode"
            value={pincode}
            onChangeText={handlePincodeChange}
            mode="outlined"
            style={styles.input}
            error={!!pincodeError}
          />
          {pincodeError ? <Text style={styles.errorText}>{pincodeError}</Text> : null}
        </View>
       
        
            )}
            {currentStep === 1 && (
              <View style={{ height: '66%', alignSelf: 'center', padding: 20 }}>
                <Text style={{ fontSize: 30, marginBottom: 20, textAlign: 'center' }}>Personal Details</Text>
                <PaperInput
                  label="Fullname"
                  value={village}
                  onChangeText={text => setVillage(text)}
                  mode="outlined"
                  style={styles.input}
                />
                <PaperInput
                  label="Phone"
                  value={village}
                  onChangeText={text => setVillage(text)}
                  mode="outlined"
                  style={styles.input}
                />
                <PaperInput
                  label="Email"
                  value={village}
                  onChangeText={text => setVillage(text)}
                  mode="outlined"
                  style={styles.input}
                />
                <PaperInput
                  label="Address"
                  value={village}
                  onChangeText={text => setVillage(text)}
                  mode="outlined"
                  style={styles.input}
                />
              </View>
            )}
            {currentStep === 2 && (
              <View style={{ height: '66%', alignSelf: 'center', padding: 20 }}>
                <Text style={{ fontSize: 30, marginBottom: 20, textAlign: 'center' }}>Attachments</Text>
                <View style={styles.v1}>
                  <TouchableOpacity style={styles.touch} onPress={handleImage}>
                    <Text style={styles.text}>Upload</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.touch} onPress={handleCamera}>
                    <Text style={styles.text}>Camera</Text>
                  </TouchableOpacity>
                </View>
                {imageUri && (
                  <Image
                    source={{ uri: imageUri }}
                    style={{ width: 200, height: 200, marginTop: 20, marginBottom:20, alignSelf: 'center' }}
                  />
                )}
              </View>
            )}
            {currentStep === 3 && (
              <View style={{ height: '66%', alignSelf: 'center' }}>
                <Text style={{ fontSize: 30, textAlign:'center', marginTop:30}}> Complaint Details</Text>
                <VoiceRecorder />
              </View>
            )}

            {/* Navigation Buttons */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              {currentStep > 0 && (
                <TouchableOpacity style={[styles.centerElement, styles.button]} onPress={() => setCurrentStep(currentStep - 1)}>
                  <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
              )}
              {(currentStep + 1) < steps.length && (
               <TouchableOpacity style={[styles.centerElement, styles.button]} onPress={handleNextStep}>
  <Text style={styles.buttonText}>Next</Text>
</TouchableOpacity>
              )}
              {(currentStep + 1) === steps.length && (
                <TouchableOpacity style={[styles.centerElement, styles.button]} onPress={handleFinish}>
                  <Text style={styles.buttonText}>Finish</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          

          {/* Modal for Success Message */}
          <Modal isVisible={isModalVisible} onBackdropPress={closeModal}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Form submitted successfully!</Text>
              <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          
        </View>
        
        
      </PaperProvider>
      
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.hometext3} onPress={() => { Linking.openURL('https://www.ridhitek.com') }}>@ Powered By <Text style={{ color: 'green' }}>Ridhitek</Text></Text>
       </View>
    </SafeAreaProvider>
  );
};


const styles = StyleSheet.create({
  centerElement: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  step: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 10,
  },
  notSelected: {
    backgroundColor: '#fff',
    borderColor: '#070720',
  },
  checked: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
  selected: {
    backgroundColor: '#0A0A30',
    borderColor: '#0A0A30',
  },
  stepText: {
    fontSize: 15,
    color: '#070720',
  },
  selectedText: {
    fontSize: 13,
    color: '#fff',
  },
  input: {
    width: 300,
    height: 45,
    marginBottom: 15,
    backgroundColor:'#f2f3f7'
  },
  touch: {
    backgroundColor: '#070720',
    width: width / 2.5,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#070720',
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius: 5,
    marginHorizontal:44,
    marginVertical:'18%',
    fontWeight:'bold'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer1: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#070720',
    padding: 10
  },
  hometext31: {
    fontSize: 14,
    color: '#fff',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#2196f3',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  hometext3: {
    fontSize: width*0.03,
    fontWeight: '300',
    textAlign: 'center',
    paddingVertical:width*0.05,
    backgroundColor:'#070720',
    color:'white',
    borderRadius:5,
    marginTop:width*0.02
  },
  footer:{
    paddingTop:width*0.31
  },
});

export default Settings;

