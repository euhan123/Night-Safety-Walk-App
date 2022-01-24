import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function SplashScreen () {
    return (
        <View style = {styles.container}>
            <Text> Loading Screen... </Text>
        </View>
    )
}

export default SplashScreen;