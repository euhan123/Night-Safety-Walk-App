import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Auth } from 'aws-amplify';

state = {
    username: '', email: '', password: ''
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

async signUp = () => {
    const { username, email, password } = this.state
    await Auth.signUp({ username, password, attributes: { email }})
    console.log('user successfully signed up')
}

function SignUpScreen() {
    
    return (
        <View style = {styles.container}>
            <Text> Public Sign Up Screen. </Text>
        </View>
    )
}

export default SignUpScreen;