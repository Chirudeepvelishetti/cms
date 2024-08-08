import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { Audio } from 'expo-av';

const TextAreaWithMic = () => {
  const [recording, setRecording] = useState(null);
  const [recordedURI, setRecordedURI] = useState(null);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');

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

  return (
    <View style={styles.container}>
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
            source={require('../assets/mic.webp')} // Ensure you have a mic icon in your assets
            style={styles.micIcon}
          />
        </TouchableOpacity>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textAreaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: 300,
  },
  textArea: {
    flex: 1,
    height: 100,
    textAlignVertical: 'top',
  },
  micButton: {
    marginLeft: 10,
  },
  micIcon: {
    width: 30,
    height: 30,
  },
  playButton: {
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#070720',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  gif: {
    width: 250,
    height: 90,
    marginTop: 20,
  },
});

export default TextAreaWithMic;
