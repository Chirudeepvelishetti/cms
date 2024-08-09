// screens/Page1.js
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

    const handleShopNameChange = text => {
        setShopName(text);
        setShopNameError('');
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
                            label="Village"
                            value={shopName}
                            onChangeText={handleShopNameChange}
                            mode="outlined"
                            style={styles.input}
                        // error={!!shopNameError}
                        />
                    </View>
                    <View style={styles.inputview}>
                        <DropDownPicker
                            open={districtOpen}
                            value={selectedDistrict}
                            items={districts}
                            setOpen={setDistrictOpen}
                            setValue={setSelectedDistrict}
                            setItems={setDistricts}
                            placeholder="Select a District"
                            style={styles.dropdown}
                            dropDownContainerStyle={styles.dropdownContainer}
                            zIndex={3000} // To ensure it appears above other elements
                            zIndexInverse={1000} // Ensures it doesn't overlap with below elements
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
                            style={styles.dropdown}
                            dropDownContainerStyle={styles.dropdownContainer}
                            zIndex={2000} // Higher zIndex than the village picker to avoid overlap
                            zIndexInverse={900} // Ensures it doesn't overlap with below elements
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
                            placeholder="Select a Village"
                            style={styles.dropdown}
                            dropDownContainerStyle={styles.dropdownContainer}
                            zIndex={1000} 
                            zIndexInverse={800} 
                        />

                    </View>

                    <View style={styles.inputview}>
                        <PaperInput
                            label="Pincode"
                            value={shopName}
                            onChangeText={handleShopNameChange}
                            mode="outlined"
                            style={styles.input}
                        // error={!!shopNameError}
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
        paddingTop: width * 0.05
    },
    scrollViewContent: {
        flexGrow: 1,
    },
});
