import React from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet, Button } from 'react-native';
//import handler from "./libs/handler-lib";
//import dynamoDb from "./libs/dynamodb-lib";

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

const AddFriendScreen = (props) => {
    const [friend, onChangeFriend] = React.useState("");

    const params = {
        TableName: process.env.TableName,
        Item: {
            userId: props.vars.Email,
            friendsId: friend,
        },
    };

    async function handleSubmit() {
        try {
            await dynamoDb.put(params).promise();
        }
        catch(e) {
            console.log("failed");
        }
    }

    return (
        <SafeAreaView style = {styles.container}>
            <Text> Add Friend </Text>
            <TextInput
                style = {styles.input}
                onChangeText = {onChangeFriend}
                value = {friend}
                placeholder = "Enter friend's username."
            />
            <Button 
                title = "ADD FRIEND" onPress = {handleSubmit}
            />
        </SafeAreaView>
    );
};

export default AddFriendScreen;