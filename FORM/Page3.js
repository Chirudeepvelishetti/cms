// screens/Page3.js
import React,{useState} from 'react';
import { View, Text, Button, TextInput, StyleSheet,Dimensions, KeyboardAvoidingView,ScrollView,Platform, TouchableOpacity,Image,Linking} from 'react-native';
import Forms from './Forms';
import Header from '../HOME/Header'
import * as ImagePicker from 'expo-image-picker';

const { width, height } = Dimensions.get('window');
export default function Page3({ navigation }) {
  const [imageUri, setImageUri] = useState(null);

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
    <View>
    <Header />
    <View style={styles.indicatorview}>
           <Forms currentStep={3} />
        </View>
    <KeyboardAvoidingView
    style={{flex: 0}}
    behavior={Platform.OS === 'android' ? 'padding' : 'height'}
  >
    <ScrollView
    contentContainerStyle={styles.scrollViewContent}
    keyboardShouldPersistTaps='handled'
    showsVerticalScrollIndicator={false} 
    >
    <View style={styles.container}>
    <View style={{paddingBottom:width*0.08}}>
      <Text style={styles.shopheadtext}>ATTACHMENTS</Text>
      </View>
    <View>

    </View>
    <View>
        <TouchableOpacity onPress={handleImage}>
            <Text style={styles.buttontext} >UPLOAD</Text>
        </TouchableOpacity>
    </View>
    <Text style={styles.text}>OR</Text>
    <View>
        <TouchableOpacity onPress={handleCamera}>
            <Text style={styles.buttontext}>CAMERA</Text>
        </TouchableOpacity>
    </View>
    
    <View style={{paddingVertical:width*0.10}}>
    {imageUri && (
      <Image
        source={{ uri: imageUri }}
        style={styles.image}
      />
    )}
    </View>


    <View style={styles.buttonview}>   
    <View>     
    <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Text style={styles.buttontext}>BACK</Text>
    </TouchableOpacity>
    </View>
    <View>     
    <TouchableOpacity onPress={()=>navigation.navigate('page4')}>
      <Text style={styles.buttontext}>NEXT</Text>
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
  container: {
    
   backgroundColor:'white',
    marginHorizontal:width*0.03,
    marginTop:width*0.05,
   marginBottom:width*0.05,
    elevation:20,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  indicatorview:{
    paddingTop:width*0.06,
    paddingBottom:width*0.01,
    backgroundColor:'white',
    marginHorizontal:width*0.01,
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
  text:{
    fontSize:width*0.04,
    fontWeight:'bold',
    textAlign:'center'
  },
  buttonview:{
    
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:width*0.10,
    marginBottom:width*0.05
  },
  image:{
    width: width*0.25,
     height: width*0.25, 
    //  marginTop: 20,
    //   marginBottom:20, 
      alignSelf: 'center' ,
      borderRadius:5,
      elevation:20,  
  },
  hometext3: {
    fontSize: width*0.03,
    fontWeight: '300',
    textAlign: 'center',
    paddingVertical:width*0.05,
    backgroundColor:'#070720',
    color:'white',
    borderRadius:5,
    marginTop:width*0.00
  },
  footer:{
    paddingTop:width*0.00
  },
  scrollViewContent: {
    height:560
  },
});
