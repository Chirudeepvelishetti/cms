// components/StepIndicator.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Forms = ({ currentStep }) => {
  const steps = [1, 2, 3, 4,5];

  return (
    <View style={styles.container}>
      {steps.map(step => (
        <View key={step} style={styles.stepWrapper}>
          <View
            style={[
              styles.stepCircle,
              { backgroundColor: step <= currentStep ? '#070720' : 'lightgray' },
            ]}
          >
            <Text style={styles.stepText}>{step}</Text>
          </View>
          {step < steps.length && <View style={styles.stepLine} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  stepWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepText: {
    color: 'white',
    fontWeight: 'bold',
  },
  stepLine: {
    height: 2,
    width: 50,
    backgroundColor: 'gray',
  },
});

export default Forms;
