import { StyleSheet, Text, View, ImageBackground, Dimensions, Button, Image, ScrollView } from 'react-native';
import React from 'react';

const backgroundImage = require('../../assets/images/background.png');

const { height, width } = Dimensions.get('window');

const Live = () => {
  return (
    <ImageBackground 
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover" 
      blurRadius={5}
    >
      <View style={styles.container}>
        <Text style={styles.title}>LIVE STREAM</Text>

        {/* Video Player Area */}
        <View style={styles.videoContainer}>
          <Text style={styles.videoText}>[ Video Player Placeholder ]</Text>
        </View>

        {/* Chat Window */}
        <View style={styles.chatContainer}>
          <Text style={styles.chatTitle}>Live Chat</Text>
          <ScrollView>
            <View style={styles.messageContainer}>
              <Image source={{ uri: 'https://img1.wsimg.com/isteam/ip/175fa811-14be-4397-ab26-16f54c04d81d/0BBAEB6F-C01A-4402-82EB-E8602115EDE6.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true' }} style={styles.profileImage} />
              <View style={styles.messageBubble}>
                <Text style={styles.chatUser}>JK</Text>
                <Text style={styles.chatText}>Hi everyone!</Text>
              </View>
            </View>
            <View style={styles.messageContainer}>
              <Image source={{ uri: 'https://asianwiki.com/images/5/5c/RM_%28BTS%29-P1.jpg' }} style={styles.profileImage} />
              <View style={styles.messageBubble}>
                <Text style={styles.chatUser}>RM</Text>
                <Text style={styles.chatText}>Ready for the show!</Text>
              </View>
            </View>
            <View style={styles.messageContainer}>
              <Image source={{ uri: 'https://resizing.flixster.com/VtNtQ5-OgkRFCS79iA1Oap_G0Os=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/873988_v9_bc.jpg' }} style={styles.profileImage} />
              <View style={styles.messageBubble}>
                <Text style={styles.chatUser}>Angelica</Text>
                <Text style={styles.chatText}>Exciting</Text>
              </View>
            </View>
            {/* Add more chat messages as needed */}
          </ScrollView>
        </View>

        {/* Start/Join Button */}
        <Button title="Join Live Session" onPress={() => alert('Joining live session...')} color="#121481" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontFamily: 'RoadRage-Regular', // Ensure this font is loaded in your App component
    fontSize: 75,
    color: '#121481',
    marginBottom: 20,
    textAlign: 'center',
  },
  videoContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  videoText: {
    color: '#fff',
    fontSize: 20,
  },
  chatContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    maxHeight: 200, // Limit height for chat
    overflow: 'hidden', // Hides overflow
  },
  chatTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageBubble: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
  },
  chatUser: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  chatText: {
    color: '#333',
  },
});

export default Live;