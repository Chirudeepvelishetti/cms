import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import styles from '../CSS/Globalstyles';

export default function ComplaintButtons() {
  const [scanning, setScanning] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [scannerActive, setScannerActive] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handlePress = () => {
    setScanning(true);
    setScannerActive(true);
  };

  const handleBarCodeScanned = ({ type, data }) => {
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    setScanning(false);
    setScannerActive(false);
    // Navigate to the Scanner page and pass the scanned data
    navigation.navigate('page1', { scannedData: data });
  };

  const closeScanner = () => {
    setScanning(false);
    setScannerActive(false);
    navigation.navigate('Home');
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 0 }}>
      <View style={styles.homev2}>
        <TouchableOpacity style={styles.hometo} onPress={handlePress}>
          <View>
            <Text style={styles.btext}>SCAN QR CODE TO REGISTER YOUR COMPLAINT </Text>
          </View>
          <View>
            <Image source={require('../assets/croped.gif')} style={styles.bimage} />
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={scanning}
        onRequestClose={closeScanner}
      >
        <View style={styles.modalContainer}>
          <BarCodeScanner
            onBarCodeScanned={handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {scannerActive && (
            <TouchableOpacity
              style={styles.closeButton}
              onPress={closeScanner}
            >
              <Text style={styles.closeButtonText}>CLOSE</Text>
            </TouchableOpacity>
          )}
        </View>
      </Modal>
    </View>
  );
}
