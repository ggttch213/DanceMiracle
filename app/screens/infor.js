import * as React from 'react';
import { Text, View, Image, TouchableOpacity,StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';

const CarouselWithCustomButtons = () => {
  const navigation = useNavigation();

  const handleLeftButtonPress = () => {
    navigation.navigate('EventInfoPage'); // 這裡替換成你的賽事資訊頁面名稱
  };

  const handleRightButtonPress = () => {
    navigation.navigate('DanceStylePage'); // 這裡替換成你的舞風介紹頁面名稱
  };

  const handleFirstAdditionalButtonPress = () => {
    navigation.navigate('DanceTeacherPage'); // 這裡替換成你的舞蹈老師頁面名稱
  };

  const handleSecondAdditionalButtonPress = () => {
    navigation.navigate('DanceGroupPage'); // 這裡替換成你的舞蹈團體頁面名稱
  };
  return (
    <View style={styles.bg}>
      
      <Swiper>
        <View>
          <Image style={{ width: 500, height: 230 }}
            source={require('../assets/breaking.jpg')}
          />
        </View>
        <View>
          <Image style={{ width: 500, height: 230 }}
            source={require('../assets/breaking2.jpg')}
          />
        </View>
        <View>
          <Image style={{ width: 500, height: 230 }}
            source={require('../assets/breaking3.jpg')}
          />
        </View>
      </Swiper>
      
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handleLeftButtonPress}>
        
  <ImageBackground
    source={require('../assets/dance2.jpg')} // Your image source
    style={styles.buttonBackgroundImage}
    imageStyle={{ borderRadius: 15 }} // Apply borderRadius to the image
  >
    
    <Text style={styles.buttonText}>賽事資訊</Text>
  </ImageBackground>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={handleRightButtonPress}>
  <ImageBackground
    source={require('../assets/breaking2.jpg')} // Your image source
    style={styles.buttonBackgroundImage}
    imageStyle={{ borderRadius: 15 }} // Apply borderRadius to the image
  >
    <Text style={styles.buttonText}>舞風介紹</Text>
  </ImageBackground>
</TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handleFirstAdditionalButtonPress}>
  <ImageBackground
    source={require('../assets/breaking3.jpg')} // Your image source
    style={styles.buttonBackgroundImage}
    imageStyle={{ borderRadius: 15 }} // Apply borderRadius to the image
  >
    <Text style={styles.buttonText}>舞蹈老師</Text>
  </ImageBackground>
</TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSecondAdditionalButtonPress}>
  <ImageBackground
    source={require('../assets/dance1.jpg')} // Your image source
    style={styles.buttonBackgroundImage}
    imageStyle={{ borderRadius: 15 }} // Apply borderRadius to the image
  >
    <Text style={styles.buttonText}>舞蹈團體</Text>
  </ImageBackground>
</TouchableOpacity>
      </View>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <CarouselWithCustomButtons />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      position: 'relative',
  },
  bg: {
      flex: 1,
    backgroundColor:"#F9D2FF",
    padding:20,
  },
  content: {
      flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    borderRadius: 30,
    height: 190,
    width: '45%',
    alignItems: 'center',
    flexDirection: 'column', // Set flexDirection to 'column'
    justifyContent: 'center', // Optional, if you also want to horizontally center the text
  },
  buttonBackgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    width: '100%',
    height: '100%',
    borderRadius: 15, // Apply the same borderRadius as the button
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 190, // Same as button height
    fontSize:32,
    textShadowColor: 'white',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },

});
