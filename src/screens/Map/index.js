import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, TextInput } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

const MapScreen = () => {
    const [emptyText, userInput] = React.useState('');

    return (
        <SafeAreaView>
            <TextInput 
                style = {styles.input}
                onChangeText = {emptyText => userInput(emptyText)}
                placeholder =  "Destination"
                keyboardType = "ascii-capable"
                autoCorrect = "false"
            />
            <Text style = {styles.container}>
                {emptyText.split(' ').map((word) => word && 'hi').join(' ')}
            </Text>
        </SafeAreaView>

    );
};

export default MapScreen;