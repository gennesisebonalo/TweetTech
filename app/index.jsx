import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { useRouter } from 'expo-router';

const backgroundImage = require('../assets/images/background.png');
const logoImage = require('../assets/images/logo.png');

export default function App() {
  const router = useRouter();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'RoadRage-Regular': require('../assets/fonts/RoadRage-Regular.ttf'), 
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <ImageBackground 
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover" 
      blurRadius={5}
    >
      <View style={styles.container}>
        <Text style={styles.title}>WELCOME TO TWEET TECH</Text>

        <TouchableOpacity onPress={() => router.push('/home')}>
          <Image
            source={logoImage}
            style={styles.logo}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const { height, width } = Dimensions.get('window');  

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,  
    height: height,  
    justifyContent: 'center',  
    alignItems: 'center',  
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'RoadRage-Regular', 
    fontSize: 75, 
    color: '#121481',
    marginBottom: 10,
    textAlign: 'center',
  },
  logo: {
    width: 150,  
    height: 150,
  },
});
