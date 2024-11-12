import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Image imports
const backgroundImage = require('../../assets/images/background.png');
const profileImage1 = require('../../assets/images/profile.jpg');  
const profileImage2 = require('../../assets/images/profile2.jpg'); 
const profileImage3 = require('../../assets/images/profile3.jpg');
const profileImage4 = require('../../assets/images/profile4.jpg');
const profileImage5 = require('../../assets/images/profile5.jpg');
const samsungImage = require('../../assets/images/samsung.jpg');
const thomasImage = require('../../assets/images/thomas.jpg');
const appLogo = require('../../assets/images/logo.png');

const Home = () => {
  return (
    <ImageBackground 
      source={backgroundImage} 
      style={styles.background}
      resizeMode="cover"
      blurRadius={5}
    >
      {/* Header with Logo, Profile, and Settings */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={profileImage4} style={styles.profilePicHeader} />
        </TouchableOpacity>
        <Image source={appLogo} style={styles.logo} />
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="cog" size={24} color="blue" />
        </TouchableOpacity>
      </View>

      {/* ScrollView to make the content scrollable */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Create Post and Game Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.createPostButton}>
            <Text style={styles.buttonText}>Create Post</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gameButton}>
            <Text style={styles.buttonText}>Game</Text>
          </TouchableOpacity>
        </View>

        {/* Posts */}
        {renderPost(profileImage1, "minyoongi", "@suga 51m", "Latest in Samsung", samsungImage, 2400, 1500000, 5700, 24000000)}
        {renderPost(profileImage3, "junghoseok", "@jhope 1m", "Thomas Edison created the world's first industrial research laboratory and is known as the father of technology.", thomasImage, 2400, 1500000, 5700, 24000000)}

        {/* Status Updates */}
        {renderStatusUpdate(profileImage2, "jiminshi", "@ajimin", "Check AI-Generated Content Online", 143, 1143, 549, 1898)}
        {renderStatusUpdate(profileImage5, "jinhyung", "@ajin", "\"Just read about the latest advancements in AI! It's amazing how technology is reshaping our world. 🤖✨ What are your thoughts on AI's future?\"", 22, 106, 376, 190)}
      </ScrollView>
    </ImageBackground>
  );
};

// Function to render each post
const renderPost = (profileImage, username, handle, postTitle, postImage, comments, retweets, likes, views) => (
  <>
    <View style={styles.header}>
      <Image source={profileImage} style={styles.profilePic} />
      <View>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.handle}>{handle}</Text>
      </View>
    </View>
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{postTitle}</Text>
      <Image source={postImage} style={styles.postImage} resizeMode="contain" />
      <View style={styles.postActions}>
        <Text style={styles.actionsText}>{comments.toLocaleString()}</Text>
        <FontAwesome name="comment" size={24} color="white" />
        <Text style={styles.actionsText}>{retweets.toLocaleString()}</Text>
        <FontAwesome name="retweet" size={24} color="white" />
        <Text style={styles.actionsText}>{likes.toLocaleString()}</Text>
        <FontAwesome name="heart" size={24} color="white" />
        <Text style={styles.actionsText}>{views.toLocaleString()}</Text>
      </View>
    </View>
  </>
);

// Function to render each status update
const renderStatusUpdate = (profileImage, username, handle, statusUpdate, comments, retweets, likes, views) => (
  <>
    <View style={styles.header}>
      <Image source={profileImage} style={styles.profilePic} />
      <View>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.handle}>{handle}</Text>
      </View>
    </View>
    <View style={styles.statusUpdateContainer}>
      <Text style={styles.statusUpdate}>{statusUpdate}</Text>
      <View style={styles.postActions}>
        <Text style={styles.actionsText}>{comments.toLocaleString()}</Text>
        <FontAwesome name="comment" size={24} color="white" />
        <Text style={styles.actionsText}>{retweets.toLocaleString()}</Text>
        <FontAwesome name="retweet" size={24} color="white" />
        <Text style={styles.actionsText}>{likes.toLocaleString()}</Text>
        <FontAwesome name="heart" size={24} color="white" />
        <Text style={styles.actionsText}>{views.toLocaleString()}</Text>
      </View>
    </View>
  </>
);

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',       
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  logo: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  iconButton: {
    marginHorizontal: 15,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  createPostButton: {
    backgroundColor: '#478CCF',
    padding: 15,
    borderRadius: 30,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#1C6BA0',
  },
  gameButton: {
    backgroundColor: '#86B6F6',
    padding: 15,
    borderRadius: 30,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#1C6BA0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  profilePicHeader: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    fontWeight: 'bold',
    color: 'black',
  },
  handle: {
    color: '#3D3B40',
  },
  postContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  postTitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 5,
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  postContainer: {
    backgroundColor: '#074173', // Slightly transparent white background
    borderRadius: 10, // Rounded corners
    padding: 15, // Increased padding for more space
    marginVertical: 10, // Margin between posts
    shadowColor: '#000', // Shadow color for elevation
    shadowOffset: {
        width: 0, // No horizontal offset
        height: 4, // Vertical shadow offset
    },
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 5, // Blur radius of the shadow
    elevation: 5, // Android shadow elevation
    borderWidth: 1, // Border width
    borderColor: '#1C6BA0', // Border color
},
  actionsText: {
    color: 'white',
    marginHorizontal: 5,
  },
  statusUpdateContainer: {
    backgroundColor: '#074173', // Slightly transparent white background
    borderRadius: 10, // Rounded corners
    padding: 15, // Increased padding for more space
    marginVertical: 10, // Margin between posts
    shadowColor: '#000', // Shadow color for elevation
    shadowOffset: {
        width: 0, // No horizontal offset
        height: 4, // Vertical shadow offset
    },
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 5, // Blur radius of the shadow
    elevation: 5, // Android shadow elevation
    borderWidth: 1, // Border width
    borderColor: '#1C6BA0', // Border color
  },
  statusUpdate: {
    color: 'white',
    marginBottom: 5,
  },
});

export default Home;