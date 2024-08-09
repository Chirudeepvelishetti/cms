// screens/Page2.js
import React,{useState} from 'react';
import { View, Text,  StyleSheet,Dimensions, TouchableOpacity,KeyboardAvoidingView,Platform, ScrollView,Linking} from 'react-native';
import Forms from './Forms';
import Header from '../HOME/Header';
import { Provider as PaperProvider, TextInput as PaperInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; 
const { width, height } = Dimensions.get('window');


export default function Page2() {
  const navigation = useNavigation(); 
  const [shopName, setShopName] = useState('');
  
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
      <View style={{paddingBottom:width*0.08}}>
      <Text style={styles.shopheadtext}>PERSONAL DETAILS</Text>
      </View>
            <View style={styles.inputview}> 
            <PaperInput
                    label="First Name"
                    value={shopName}
                    // onChangeText={handleShopNameChange}
                    mode="outlined"
                    style={styles.input}
                    // error={!!shopNameError}
            />
            </View>
                <View style={styles.inputview}> 
                <PaperInput
                        label="Last Name"
                        value={shopName}
                        // onChangeText={handleShopNameChange}
                        mode="outlined"
                        style={styles.input}
                        // error={!!shopNameError}
                />
                </View>
                <View style={styles.inputview}> 
                <PaperInput
                        label="Phone"
                        value={shopName}
                        // onChangeText={handleShopNameChange}
                        mode="outlined"
                        style={styles.input}
                        // error={!!shopNameError}
                />
                </View>
                <View style={styles.inputview}> 
                <PaperInput
                        label="Email"
                        value={shopName}
                        // onChangeText={handleShopNameChange}
                        mode="outlined"
                        style={styles.input}
                        // error={!!shopNameError}
                />
                </View>
                <View style={styles.inputview}> 
                <PaperInput
                        label="Address"
                        value={shopName}
                        // onChangeText={handleShopNameChange}
                        mode="outlined"
                        style={styles.input}
                        // error={!!shopNameError}
                />
                </View>
    
                <View style={styles.buttonview}>   
                <View>     
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <Text style={styles.buttontext}>BACK</Text>
                </TouchableOpacity>
                </View>
                <View>     
                <TouchableOpacity onPress={()=>navigation.navigate('page3')}>
                  <Text style={styles.buttontext}>NEXT</Text>
                </TouchableOpacity>
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
 input: {
    borderWidth: 0,
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
  indicatorview:{
    paddingTop:width*0.06,
    paddingBottom:width*0.01,
    backgroundColor:'white',
    marginHorizontal:width*0.01,
  },
  inputview:{
    paddingHorizontal:width*0.08,
    paddingVertical:width*0.01,
    marginVertical:width*0.01
  },
  buttontext:{
    fontSize:width*0.04,
    fontWeight:'bold',
    color:'white',
    backgroundColor:'#070720',
    textAlign:'center',
    paddingVertical:width*0.02, 
    paddingHorizontal:width*0.10,
    borderRadius:10
  },
  buttonview:{
    
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:width*0.10,
    marginBottom:width*0.05
    
  },
  container:{
    backgroundColor:'white',
    marginHorizontal:width*0.03,
    marginTop:width*0.06,
    marginBottom:width*0.08,
    elevation:20,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
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
    flexGrow: 1,
  },
});
