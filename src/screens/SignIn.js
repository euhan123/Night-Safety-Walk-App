import React from 'react';
import { SafeAreaView, TextInput, Text, Button, StyleSheet } from 'react-native';
import { Auth } from "aws-amplify";

import "../App";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth:1,
        padding: 10,
    },
});

const SignInScreen = ({ LogIn, navigation, params}) => {

    async function handleSubmit() {    
        try {
          await Auth.signIn(params.Email, params.Password);
          LogIn(true);
        } catch (e) {
        }
    }

    return (
        <SafeAreaView style = {styles.container}>
            <Text> Sign In </Text>
            <TextInput
                style = {styles.input}
                onChangeText = {params.ChangeEmail}
                value = {params.Email}
                placeholder = "Enter your email."
                keyboardType = "email-address"
            />
            <TextInput 
                style = {styles.input}
                onChangeText = {params.ChangePass}
                value = {params.Password}
                placeholder = "Enter your password."
            />
            <Button 
                title = "Sign In" onPress = {handleSubmit}
            />
        </SafeAreaView>

    );
};

export default SignInScreen; 