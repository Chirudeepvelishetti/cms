import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Image, Alert,Dimensions,Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Header from '../HOME/Header';
import Footer from '../HOME/Footer';
const { width, height } = Dimensions.get('window');
const Settings = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [recording, setRecording] = useState(false);
  const [recordedFile, setRecordedFile] = useState(null);
  const [imageUri, setImageUri] = useState(null);
//   const [audioPlayer] = useState(new AudioRecorderPlayer());

  const steps = ['Shop details', 'Personal details', 'Attachment', 'Submit'];

  const startRecording = async () => {
    try {
      const path = 'test.aac';
      await audioPlayer.startRecorder(path);
      setRecording(true);
      console.log('Recording started');
    } catch (err) {
      console.error('Error starting recording:', err);
      Alert.alert('Error', 'Failed to start recording');
    }
  };

  const stopRecording = async () => {
    try {
      const result = await audioPlayer.stopRecorder();
      setRecording(false);
      setRecordedFile(result);
      console.log('Recording stopped:', result);
    } catch (err) {
      console.error('Error stopping recording:', err);
      Alert.alert('Error', 'Failed to stop recording');
    }
  };

  const handleimage = async () => {
    let imagepick = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })
    console.log(imagepick);
    if (!imagepick.canceled && Array.isArray(imagepick.assets) && imagepick.assets.length > 0) {
      setImage(imagepick.assets[0].uri);
    } else {
      console.log('Image selection was canceled or no image assets found.');
    }
  }
  const handlecamera = async () => {
    const cam = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })
    console.log(cam);
    if (!cam.canceled && Array.isArray(cam.assets) && cam.assets.length > 0) {
      setImage(cam.assets[0].uri);
    }
    else {
      console.log('image not uploaded');
    }
  }




  return (
    
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#f6f6f6' }}>
    <Header />
      {/* Steps */}
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <View style={{ width: 280, height: 70 }}>
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
      <View style={{ backgroundColor: '#fff' }}>
        {currentStep === 0 && (
       
          <View style={{ height: '66%', alignSelf: 'center', paddingHorizontal: 20 , paddingVertical:10 }}>
            <Text style={{ fontSize: 30, marginBottom: 20, textAlign: 'center' }}>Shop Details</Text>
            <TextInput placeholder="Enter Shop Name" style={styles.input} />
            <TextInput placeholder="Enter District" style={styles.input} />
            <TextInput placeholder="Enter Mandal" style={styles.input} />
            <TextInput placeholder="Enter Village" style={styles.input} />
            <TextInput placeholder="Enter Pincode" style={styles.input} />
          </View>
         
        )}
        {currentStep === 1 && (
          <View style={{ height: '66%', alignSelf: 'center', padding: 20 }}>
            <Text style={{ fontSize: 30, marginBottom: 20, textAlign: 'center' }}>Personal Details</Text>
            <TextInput placeholder="Enter Name" style={styles.input} />
            <TextInput placeholder="Enter Phone Number" keyboardType="phone-pad" style={styles.input} />
          </View>
        )}
        {currentStep === 2 && (
          <View style={{ height: '66%', alignSelf: 'center', padding: 20 }}>
            <Text style={{ fontSize: 30, marginBottom: 20, textAlign: 'center' }}>Attachments</Text>
            <View style={styles.v1}>
        <TouchableOpacity style={styles.touch} onPress={handleimage}>
          <Text style={styles.text}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch} onPress={handlecamera}>
          <Text style={styles.text}>camera</Text>
        </TouchableOpacity>

      </View>
          </View>
        )}
        {currentStep === 3 && (
          <View style={{ height:'66%', alignSelf: 'center' }}>
            <Text style={{ fontSize: 30 }}>Step 4</Text>
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
            <TouchableOpacity style={[styles.centerElement, styles.button]} onPress={() => setCurrentStep(currentStep + 1)}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          )}
          {(currentStep + 1) === steps.length && (
            <TouchableOpacity style={[styles.centerElement, styles.button]} onPress={() => console.log('Finish')}>
              <Text style={styles.buttonText}>Finish</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.footer1}>
      <Text style={styles.hometext31} onPress={() => { Linking.openURL('https://www.ridhitek.com') }}>@ Powered By <Text style={{ color: 'green' }}>Ridhitek</Text></Text>
    </View>
    </View>
    
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
    backgroundColor: '#0faf9a',
    borderColor: '#0faf9a',
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
    color: '#ffffff',
  },
  button: {
    // bottom: 10,
    
    
    
   
    
    paddingHorizontal:'9%',
    

  },
  buttonText: {
    color: '#fff',
    width: 80,
    height: 35,
    backgroundColor: '#0A0A30',
    elevation: 10,
    borderRadius: 15,
    textAlign:'center',
    paddingTop:5,
    fontWeight:'bold',
    fontSize:18
  },
  input: {
    height: 40,
    width: 300,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    // marginBottom: 10,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    alignSelf: 'center',
  },
  hometext31: {
    fontSize: width*0.03,
    fontWeight: '300',
    textAlign: 'center',
    paddingVertical:width*0.05,
    backgroundColor:'#070720',
    color:'white',
    borderRadius:5,
    // marginTop:width*0.02
  },
  
});

export default Settings;
