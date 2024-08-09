import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Linking } from 'react-native';
import Forms from './Forms';
import Header from '../HOME/Header';
import DropDownPicker from 'react-native-dropdown-picker';
import { Provider as PaperProvider, TextInput as PaperInput } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

export default function Page1({ navigation }) {
    const [districtOpen, setDistrictOpen] = useState(false);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [districts, setDistricts] = useState([
        { label: 'Prakasam', value: 'prakasam' },
        { label: 'Vishakapatnam', value: 'vishakapatnam' },
        { label: 'Srikakulam', value: 'srikakulam' },
    ]);

    const [mandalOpen, setMandalOpen] = useState(false);
    const [selectedMandal, setSelectedMandal] = useState(null);
    const [mandals, setMandals] = useState([
        { label: 'Mandal 1', value: 'mandal1' },
        { label: 'Mandal 2', value: 'mandal2' },
        { label: 'Mandal 3', value: 'mandal3' },
    ]);

    const [villageOpen, setVillageOpen] = useState(false);
    const [selectedVillage, setSelectedVillage] = useState(null);
    const [villages, setVillages] = useState([
        { label: 'Village 1', value: 'village1' },
        { label: 'Village 2', value: 'village2' },
        { label: 'Village 3', value: 'village3' },
    ]);

    const [shopName, setShopName] = useState('');
    const [pincode, setPincode] = useState('');
    const [errors, setErrors] = useState({ shopName: '', district: '', mandal: '', village: '',pincode:'' });

    const validate = () => {
        let isValid = true;
        const newErrors = { shopName: '', district: '', mandal: '', village: '',pincode:''};

        if (!shopName.trim()) {
            newErrors.shopName = 'Shop name is required.';
            isValid = false;
        }
        if (!selectedDistrict) {
            newErrors.district = 'District is required.';
            isValid = false;
        }
        if (!selectedMandal) {
            newErrors.mandal = 'Mandal is required.';
            isValid = false;
        }
        if (!selectedVillage) {
            newErrors.village = 'Village is required.';
            isValid = false;
        }
        if (!pincode.trim()) {
            newErrors.pincode = 'pincode is required.';
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = () => {
        if (validate()) {
            navigation.navigate('page2');
        }
    };

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
                            onChangeText={text => setShopName(text)}
                            mode="outlined"
                            style={styles.input}
                            error={!!errors.shopName}
                        />
                        {/* {errors.shopName ? <Text style={styles.errorText}>{errors.shopName}</Text> : null} */}
                    </View>
                    <View style={styles.inputview}>
                    <DropDownPicker
                    open={districtOpen}
                    value={selectedDistrict}
                    items={districts}
                    setOpen={setDistrictOpen}
                    setValue={setSelectedDistrict}
                    setItems={setDistricts}
                    placeholder="Select District"
                    style={[
                        styles.dropdown,
                        errors.district && styles.dropdownError, // Apply error style conditionally
                    ]}
                    dropDownContainerStyle={[
                        styles.dropdownContainer,
                        errors.district && styles.dropdownContainerError, // Apply error container style conditionally
                    ]}
                    // zIndex={1000}
                    // zIndexInverse={900}
                />
                       
                    </View>
                    <View style={styles.inputview}>
                    <DropDownPicker
                    open={mandalOpen}
                    value={selectedMandal}
                    items={mandals}
                    setOpen={setMandalOpen}
                    setValue={setSelectedMandal}
                    setItems={setMandals}
                    placeholder="Select a Mandal"
                    style={[
                        styles.dropdown,
                        errors.mandal && styles.dropdownError, // Apply error style conditionally
                    ]}
                    dropDownContainerStyle={[
                        styles.dropdownContainer,
                        errors.mandal && styles.dropdownContainerError, // Apply error container style conditionally
                    ]}
                    // zIndex={2000}
                    // zIndexInverse={900}
                />
                
                        
                    </View>
                    <View style={styles.inputview}>
                    <DropDownPicker
                    open={villageOpen}
                    value={selectedVillage}
                    items={villages}
                    setOpen={setVillageOpen}
                    setValue={setSelectedVillage}
                    setItems={setVillages}
                    placeholder="Select  Village"
                    style={[
                        styles.dropdown,
                        errors.village && styles.dropdownError, // Apply error style conditionally
                    ]}
                    dropDownContainerStyle={[
                        styles.dropdownContainer,
                        errors.village && styles.dropdownContainerError, // Apply error container style conditionally
                    ]}
                    zIndex={2000}
                    zIndexInverse={900}
                />
                       

                         </View>
                         <View style={styles.inputview}>
                         <PaperInput
                         label="Pincode"
                         value={pincode}
                         onChangeText={text => setPincode(text)}
                         mode="outlined"
                         style={styles.input}
                         error={!!errors.pincode}
                     />
                    </View>

                    <View style={styles.buttonview}>
                        <TouchableOpacity onPress={handleSubmit}>
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
        paddingTop: width * 0.05
    },
    scrollViewContent: {
        flexGrow: 1,
        
    },
    errorText: {
        color: 'red',
        fontSize: width * 0.04,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    dropdown: {
        borderWidth: 1,
        borderColor: 'gray', // Default border color
        borderRadius: 4,
        paddingHorizontal: width*0.10,
        height: width*0.12,
        marginVertical:width*0.01
    },
    dropdownError: {
        borderColor: '#AA0000',
        borderWidth:2 // Error border color
    },
    dropdownContainer: {
        borderColor: 'gray',
    },
    dropdownContainerError: {
        borderColor: 'lightgray', // Error border color for dropdown container
    },
});