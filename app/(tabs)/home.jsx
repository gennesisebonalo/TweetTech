import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Image imports
const profileImage1 = require('../../assets/images/profile.jpg');
const profileImage2 = require('../../assets/images/profile2.jpg');
const profileImage3 = require('../../assets/images/profile3.jpg');
const profileImage4 = require('../../assets/images/profile4.jpg');
const profileImage5 = require('../../assets/images/profile5.jpg');
const samsungImage = require('../../assets/images/samsung.jpg');
const thomasImage = require('../../assets/images/thomas.jpg');
const appLogo = require('../../assets/images/logo.png');

const { height, width } = Dimensions.get('window');

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header with Logo, Profile, and Settings */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={profileImage4} style={styles.profilePicHeader} />
        </TouchableOpacity>
        <Image source={appLogo} style={styles.logo} />
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="cog" size={24} color="#121481" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.createPostButton}>
            <Text style={styles.buttonText}>Create Post</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gameButton}>
            <Text style={styles.buttonText}>Game</Text>
          </TouchableOpacity>
        </View>

        {/* Posts */}
        {renderPost(profileImage1, "minyoongi", "@suga 51m", "Latest in Samsung", samsungImage, 2400, 1500000, 5700, 24000000, openModal)}
        {renderPost(profileImage3, "junghoseok", "@jhope 1m", "Thomas Edison created the world's first industrial research laboratory...", thomasImage, 2400, 1500000, 5700, 24000000, openModal)}

        {/* Status Updates */}
        {renderStatusUpdate(profileImage2, "jiminshi", "@ajimin", "Check AI-Generated Content Online", 143, 1143, 549, 1898)}
        {renderStatusUpdate(profileImage5, "jinhyung", "@ajin", "Just read about the latest advancements in AI! Amazing stuff!", 22, 106, 376, 190)}
      </ScrollView>

      {/* Modal for Image Preview */}
      <Modal visible={modalVisible} transparent={true} animationType="fade" onRequestClose={closeModal}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContainer}>
                <Image source={currentImage} style={styles.modalImage} resizeMode="contain" />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

// Function to render posts
const renderPost = (profileImage, username, handle, postTitle, postImage, comments, retweets, likes, views, openModal) => (
  <View style={styles.postContainer}>
    <View style={styles.header}>
      <Image source={profileImage} style={styles.profilePic} />
      <View>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.handle}>{handle}</Text>
      </View>
    </View>
    <Text style={styles.postTitle}>{postTitle}</Text>
    <TouchableOpacity onPress={() => openModal(postImage)}>
      <Image source={postImage} style={styles.postImage} />
    </TouchableOpacity>
    <View style={styles.postActions}>
      <Text style={styles.actionsText}>{comments}</Text>
      <FontAwesome name="comment" size={20} color="#121481" />
      <Text style={styles.actionsText}>{retweets}</Text>
      <FontAwesome name="retweet" size={20} color="#121481" />
      <Text style={styles.actionsText}>{likes}</Text>
      <FontAwesome name="heart" size={20} color="#121481" />
      <Text style={styles.actionsText}>{views}</Text>
    </View>
  </View>
);

// Function to render status updates
const renderStatusUpdate = (profileImage, username, handle, statusUpdate, comments, retweets, likes, views) => (
  <View style={styles.statusUpdateContainer}>
    <View style={styles.header}>
      <Image source={profileImage} style={styles.profilePic} />
      <View>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.handle}>{handle}</Text>
      </View>
    </View>
    <Text style={styles.statusUpdate}>{statusUpdate}</Text>
    <View style={styles.postActions}>
      <Text style={styles.actionsText}>{comments}</Text>
      <FontAwesome name="comment" size={20} color="#121481" />
      <Text style={styles.actionsText}>{retweets}</Text>
      <FontAwesome name="retweet" size={20} color="#121481" />
      <Text style={styles.actionsText}>{likes}</Text>
      <FontAwesome name="heart" size={20} color="#121481" />
      <Text style={styles.actionsText}>{views}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    elevation: 5,
  },
  logo: {
    width: 40,
    height: 40,
  },
  iconButton: {
    padding: 5,
  },
  scrollContainer: {
    padding: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  createPostButton: {
    backgroundColor: '#478CCF',
    padding: 10,
    borderRadius: 10,
  },
  gameButton: {
    backgroundColor: '#86B6F6',
    padding: 10,
    borderRadius: 10,
  },
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
  },
  handle: {
    color: '#555',
  },
  postTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  actionsText: {
    marginRight: 5,
  },
  statusUpdateContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  statusUpdate: {
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  modalImage: {
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
});

export default Home;
