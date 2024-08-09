// screens/Page4.js
import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import { RadioButton } from 'react-native-paper';

import { View, Text, Button, StyleSheet,Dimensions,KeyboardAvoidingView,ScrollView,Platform,TextInput,TouchableOpacity,Image,Alert,Linking} from 'react-native';
import Forms from './Forms';
import Header from '../HOME/Header'
const { width, height } = Dimensions.get('window');
export default function Page4({ navigation }) {
  const [recording, setRecording] = useState(null);
  const [recordedURI, setRecordedURI] = useState(null);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');
  const [complaintType, setComplaintType] = useState(''); 

  useEffect(() => {
    (async () => {
      await Audio.requestPermissionsAsync();
    })();
  }, []);

  const startRecording = async () => {
    try {
      const { granted } = await Audio.requestPermissionsAsync();
      if (!granted) {
        alert('You need to enable audio recording permissions.');
        return;
      }

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );

      setRecording(recording);
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    try {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecordedURI(uri);
      setRecording(null);
    } catch (err) {
      console.error('Failed to stop recording', err);
    }
  };

  const playRecording = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync({ uri: recordedURI });
      setSound(sound);
      setIsPlaying(true);
      await sound.playAsync();
      sound.setOnPlaybackStatusUpdate((status) => {
        if (!status.isPlaying) {
          setIsPlaying(false);
        }
      });
    } catch (err) {
      console.error('Failed to play recording', err);
    }
  };

  const handleMicPress = () => {
    if (recording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handlePlayPress = () => {
    if (isPlaying) {
      sound.stopAsync();
      setIsPlaying(false);
    } else {
      playRecording();
    }
  };

  const submit =()=>{
    Alert.alert(
      'Submitted',
      'Your Complaint has been successfully submitted!',
      [{
        text: 'OK', onPress: () => {
          setTimeout(() => {
           
            navigation.navigate('home');
          }, 100);
        }
      }],
      { cancelable: false }
    );
  }

  return (
    <View style={{flex:1 }}>
      <Header />
      <View style={styles.indicatorview}>
      <Forms currentStep={4} />
   </View>
   <KeyboardAvoidingView
   style={{flex: 1}}
   behavior={Platform.OS === 'android' ? 'padding' : 'height'}
 >
   <ScrollView
   contentContainerStyle={styles.scrollViewContent}
   keyboardShouldPersistTaps='handled'
   showsVerticalScrollIndicator={false} 
   >
   <View style={styles.container}>
   <View style={{paddingBottom:width*0.08}}>
   <Text style={styles.shopheadtext}>COMPLAINT DETAILS</Text>
   </View>
   <View style={styles.textAreaContainer}>
   <TextInput
     style={styles.textArea}
     placeholder="Type something..."
     multiline
     numberOfLines={4}
     value={text}
     onChangeText={setText}
   />
   <TouchableOpacity style={styles.micButton} onPress={handleMicPress}>
     <Image
       source={require('../assets/mic.webp')}
       style={styles.micIcon}
     />
   </TouchableOpacity>
 </View>

 <View style={styles.radioButtonContainer}>
   <Text style={styles.radioButtonTitle}>Select Complaint Type:</Text>
   <RadioButton.Group onValueChange={value => setComplaintType(value)} value={complaintType}>
     <View style={styles.radioButtonRow}>
       <RadioButton value="type1" />
       <Text>A4Shop Violation</Text>
     </View>
     <View style={styles.radioButtonRow}>
       <RadioButton value="type2" />
       <Text> Toddy Adulteration </Text>
     </View>
     <View style={styles.radioButtonRow}>
       <RadioButton value="type3" />
       <Text>Defence Liquor</Text>
     </View>
     <View style={styles.radioButtonRow}>
       <RadioButton value="type3" />
       <Text>Excise Personnel </Text>
     </View>
   </RadioButton.Group>
 </View>

 {recordedURI && (
   <TouchableOpacity style={styles.playButton} onPress={handlePlayPress}>
     <Text style={styles.buttonText}>{isPlaying ? 'Stop Playing' : 'Play Recording'}</Text>
   </TouchableOpacity>
 )}

 {isPlaying && (
   <Image
     source={require('../assets/recorder.webp')}
     style={styles.gif}
   />
 )}
 <View style={styles.buttonview}>   
 <View>     
 <TouchableOpacity onPress={()=>navigation.goBack()}>
   <Text style={styles.buttontext}>BACK</Text>
 </TouchableOpacity>
 </View>
 <View>     
 <TouchableOpacity onPress={()=>navigation.navigate('submit')}>
   <Text style={styles.buttontext}>FINISH</Text>
 </TouchableOpacity>
 </View>
 
</View>
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
  indicatorview:{
    paddingTop:width*0.06,
    paddingBottom:width*0.01,
    backgroundColor:'white',
    marginHorizontal:width*0.01,
  },
  shopheadtext:{
    fontSize:width*0.05,
    fontWeight:'bold',
    backgroundColor:'#070720',
    color:'white',
    textAlign:'center',
    padding:width*0.02,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    elevation:20
  },
  container: { 
   backgroundColor:'white',
    marginHorizontal:width*0.03,
    marginTop:width*0.05,
   marginBottom:width*0.02,
    elevation:20,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  textAreaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal:width*0.05,
    marginHorizontal:width*0.10
   
  },
  textArea: {
    flex: 1,
    height: width*0.30,
    textAlignVertical: 'top',
  },
  scrollViewContent: {
    height:650
  },
  micIcon: {
    width: width*0.08,
    height: width*0.08,
  },
  playButton: {
    marginHorizontal:width*0.20,
    paddingHorizontal:width*0.04,
    paddingVertical:width*0.03,
    borderRadius: 5,
    backgroundColor: '#070720',
  },
  buttonText: {
    color: 'white',
    fontSize: width*0.05,
    fontWeight:'bold',
    textAlign:'center'
  },
  gif: {
    width: width*0.25,
    height: width*0.10,
    marginTop: width*0.04,
    marginHorizontal:width*0.35
  },
  radioButtonContainer: {
    paddingHorizontal:width*0.11,
    paddingVertical:width*0.05, 
  },
  radioButtonTitle: {
    fontSize: width*0.04,
    fontWeight: 'bold',
    marginBottom: width*0.03,
  },
  radioButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: width*0.03,
  },
  buttontext:{
    fontSize:width*0.04,
    fontWeight:'bold',
    color:'white',
    backgroundColor:'#070720',
    textAlign:'center',
    paddingVertical:width*0.02, 
    paddingHorizontal:width*0.10,
    borderRadius:10,
    marginHorizontal:width*0.25,
    marginVertical:width*0.03
  },
  buttonview:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:width*0.10,
    marginBottom:width*0.05
  },
  hometext3: {
    fontSize: width*0.03,
    fontWeight: '300',
    textAlign: 'center',
    paddingVertical:width*0.05,
    backgroundColor:'#070720',
    color:'white',
    borderRadius:5,
  },
  footer:{
    paddingTop:width*0.0
  },

});
