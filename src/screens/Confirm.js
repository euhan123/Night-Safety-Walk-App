import React from 'react';
import { SafeAreaView, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Auth } from "aws-amplify";

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

const ConfirmScreen = ( {LogIn, route} ) => {
    const [confirm, onChangeConfirm] = React.useState("");
    const fields = route.params.paramKey;

    async function handleConfirmationSubmit() {
        
        try {
          await Auth.confirmSignUp(fields.email, confirm);
          await Auth.signIn(fields.email, fields.password);
      
          LogIn(true);
        } catch (e) {
        }
    }
    return (

        <SafeAreaView style = {styles.container}>
            <Text> Check your email for Verification Code. </Text>
            <TextInput
                style = {styles.input}
                onChangeText = {onChangeConfirm}
                value = {confirm}
                placeholder = "Enter verification code."
            />
            <Button 
                title = "Verify and Sign In" onPress = {handleConfirmationSubmit}
            />
        </SafeAreaView>

    );
};

export default ConfirmScreen;