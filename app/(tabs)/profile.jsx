import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, ImageBackground } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../assets/constants/images';
import CustomButton from '../assets/components/CustomButton';

export default function App() {
  const logo1Size = { width: 1000, height: 400 }; // Adjusted logo size

  // URL of the background image
  const backgroundImageUrl = 'https://i.pinimg.com/736x/73/24/aa/7324aa0142aed97c5eb8b8f64c7d2937.jpg'; // Background image URL

  return (
    <ImageBackground
      source={{ uri: backgroundImageUrl }} // Using URL for background image
      style={{ flex: 1 }}
      resizeMode="cover" // Adjust this to your liking (e.g., "cover", "contain")
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={{ width: '100%', alignItems: 'center', paddingHorizontal: 16 }}>
            <Image
              source={images.logo1}
              style={{ width: logo1Size.width, height: logo1Size.height, marginTop: 40 }} // Adjusted size
              resizeMode='contain'
            />
            <View style={{ marginTop: 1 }}>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
                Share.Connect.Engage.
              </Text>
            </View>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginTop: 50, textAlign: 'center' }}>
              Share your knowledge as you engage and connect wiht other people.
            </Text>

            <CustomButton
              title="Continue To Connect"
              handlePress={() => router.push('/sign-in')}
              containerStyles={{ width: '90%', marginTop: 20 }} // Set custom width here
            />
          </View>
        </ScrollView>
        <StatusBar backgroundColor="orange" style="light" />
      </SafeAreaView>
    </ImageBackground>
  );
}
