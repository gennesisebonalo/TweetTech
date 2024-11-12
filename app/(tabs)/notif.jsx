import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import React from 'react';

const { height, width } = Dimensions.get('window');

const Notif = () => {
  const notifications = [
    { id: 1, title: 'New Message', description: 'You received a new message from John', time: '2 minutes ago' },
    { id: 2, title: 'Update Available', description: 'A new update is available for Tweet Tech', time: '1 hour ago' },
    { id: 3, title: 'Live Stream Alert', description: 'Your favorite streamer is now live!', time: '3 hours ago' },
    { id: 4, title: 'Event Reminder', description: 'Don’t forget to join the upcoming event tomorrow', time: '1 day ago' },
    { id: 5, title: 'Security Alert', description: 'Login attempt from a new device', time: '2 days ago' },
    { id: 6, title: 'Password Changed', description: 'Your password was successfully changed', time: '3 days ago' },
    { id: 7, title: 'New Follower', description: 'You have a new follower on Tweet Tech', time: '5 days ago' },
    { id: 8, title: 'Mention in a Tweet', description: 'You were mentioned in a tweet by @techguru', time: '1 week ago' },
    { id: 9, title: 'Weekly Summary', description: 'Here’s a summary of your activity this week', time: '1 week ago' },
    { id: 10, title: 'New Comment', description: 'Someone commented on your post', time: '2 weeks ago' },
    { id: 11, title: 'Event Invitation', description: 'You have been invited to join a live event', time: '3 weeks ago' },
    { id: 12, title: 'Friend Request', description: 'You have a friend request from Alice', time: '1 month ago' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Notifications</Text>

      {/* Loop through the notifications array */}
      {notifications.map((notification) => (
        <View key={notification.id} style={styles.notificationCard}>
          <Text style={styles.notificationTitle}>{notification.title}</Text>
          <Text style={styles.notificationDescription}>{notification.description}</Text>
          <Text style={styles.notificationTime}>{notification.time}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#121481',
    marginBottom: 20,
  },
  notificationCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#121481',
    marginBottom: 5,
  },
  notificationDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  notificationTime: {
    fontSize: 14,
    color: '#888',
  },
});

export default Notif;
