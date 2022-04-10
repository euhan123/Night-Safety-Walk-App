import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FlashMessage from "react-native-flash-message";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const LandingScreen = ({ navigation }) => {
    return (
        <View style = {styles.container}>
            <Button
                title = "Go to Sign In"
                onPress = {() => navigation.navigate('Sign In')}
            />
            <Text> OR </Text>
            <Button 
                title = "Go to Sign Up" 
                onPress = {() => navigation.navigate('Sign Up')}
            />
            <FlashMessage position = "top" />{}
        </View>
    );
};

export default LandingScreen; 