import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const AppButtonOn = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.ButtonstyleOn}>
      <Text style={styles.buttonTextOn}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/BG.gif')}
        style={styles.backgroundImage}
      />
      <Text style={{ marginTop: 10, color: "white", fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}>舞出你的Style</Text>
      <Image
        source={require('../assets/dance1.jpg')}
        style={styles.circleImage}
      />
      <Text style={{ margin: 20, color: "white", fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>根據您對音樂風格、個性舞蹈呈現的喜好分析</Text>
      <Text style={{ marginTop: 10, color: "white", fontSize: 35, textAlign: 'center', fontWeight: 'bold' }}>為您打造100%適合您的舞風</Text>
      <AppButtonOn title="按此測驗" onPress={() => navigation.navigate('Questionnaire')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  ButtonstyleOn: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderRadius: 20,
    backgroundColor: 'purple',
    padding: 10,
    width: 100,
    height: 50,
  },
  buttonTextOn: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  circleImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#fff',
    alignSelf: 'center',
    marginTop: 15,
  },
});
