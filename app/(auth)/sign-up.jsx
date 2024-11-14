import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome for icons
import { useRouter } from 'expo-router'; // Importing router for navigation
import { images } from '../../constants'; // Ensure you have the path to your images

const SignUp = () => {
    const router = useRouter(); // Initialize router
    const backgroundImageUrl = 'https://i.pinimg.com/736x/73/24/aa/7324aa0142aed97c5eb8b8f64c7d2937.jpg'; // Background image URL
    const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State for confirm password visibility

    // Function to handle Sign Up navigation
    const handleSignUpPress = () => {
        router.push('/sign-in'); // Change to your desired path
    };

    // Function to navigate to the Login screen
    const handleLogInPress = () => {
        router.push('/sign-in'); // Change to your login path
    };

    return (
        <ImageBackground
            source={{ uri: backgroundImageUrl }}
            style={{ flex: 1 }}
            resizeMode="cover"
        >
            <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{
                        width: '90%',
                        maxWidth: 400,
                        backgroundColor: 'white',
                        borderRadius: 8,
                        padding: 24,
                        marginVertical: 24,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.3,
                        shadowRadius: 2,
                        elevation: 5
                    }}>
                        {/* Logo Image */}
                        <Image
                            source={images.logo} // Make sure this points to your logo image
                            style={{ width: 120, height: 120, alignSelf: 'center', marginBottom: 20 }} // Adjust size as needed
                            resizeMode='contain'
                        />

                        <Text style={{
                            fontSize: 24,
                            color: '#001F3F',
                            marginBottom: 20,
                            textAlign: 'center',
                            fontFamily: 'YourFont-Bold' // Replace with your font
                        }}>
                            Create an Account
                        </Text>

                        {/* Email Input */}
                        <TextInput
                            placeholder="Username"
                            placeholderTextColor="#B0BEC5"
                            style={{
                                backgroundColor: '#E0E0E0',
                                borderRadius: 8,
                                width: '100%',
                                marginTop: 10,
                                padding: 12
                            }}
                            keyboardType="username"
                        />
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#B0BEC5"
                            style={{
                                backgroundColor: '#E0E0E0',
                                borderRadius: 8,
                                width: '100%',
                                marginTop: 10,
                                padding: 12
                            }}
                            keyboardType="email-address"
                        />

                        {/* Password Input */}
                        <View style={{ position: 'relative', marginTop: 10 }}>
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor="#B0BEC5"
                                secureTextEntry={!passwordVisible}
                                style={{
                                    backgroundColor: '#E0E0E0',
                                    borderRadius: 8,
                                    width: '100%',
                                    padding: 12
                                }}
                            />
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    right: 12,
                                    top: 12,
                                    padding: 8
                                }}
                                onPress={() => setPasswordVisible(!passwordVisible)}
                            >
                                <Icon name={passwordVisible ? "eye" : "eye-slash"} size={20} color="#B0BEC5" />
                            </TouchableOpacity>
                        </View>

                        {/* Confirm Password Input */}
                        <View style={{ position: 'relative', marginTop: 10 }}>
                            <TextInput
                                placeholder="Confirm Password"
                                placeholderTextColor="#B0BEC5"
                                secureTextEntry={!confirmPasswordVisible}
                                style={{
                                    backgroundColor: '#E0E0E0',
                                    borderRadius: 8,
                                    width: '100%',
                                    padding: 12
                                }}
                            />
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    right: 12,
                                    top: 12,
                                    padding: 8
                                }}
                                onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                            >
                                <Icon name={confirmPasswordVisible ? "eye" : "eye-slash"} size={20} color="#B0BEC5" />
                            </TouchableOpacity>
                        </View>

                        {/* Sign Up Button */}
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#00008B',
                                borderRadius: 12,
                                width: '100%',
                                height: 48,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 20
                            }}
                            activeOpacity={0.7}
                            onPress={handleSignUpPress} // Update to use the new function
                        >
                            <Text style={{
                                fontFamily: 'YourFont-Bold', // Replace with your font
                                fontSize: 18,
                                color: 'white'
                            }}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>

                        {/* Additional Links */}
                        <Text style={{
                            color: '#001F3F',
                            marginTop: 16,
                            textAlign: 'center'
                        }}>
                            Already have an account?{' '}
                            <TouchableOpacity onPress={handleLogInPress}>
                                <Text style={{
                                    color: 'blue',
                                    textDecorationLine: 'underline'
                                }}>
                                    Log In
                                </Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default SignUp;
