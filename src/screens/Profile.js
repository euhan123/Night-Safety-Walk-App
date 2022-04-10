import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList, TextInput, Button } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import * as subscriptions from "../graphql/subscriptions";


import Amplify, { Auth } from "aws-amplify";
import awsmobile from '../aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { ConsoleLogger } from '@aws-amplify/core';


Amplify.configure({
    ...awsmobile,
    Analytics: {
      disabled: true,
    },
});

class Profile extends React.Component {
    state = {userId: "", email: ""}

    async componentDidMount() {
        const response = await Auth.currentUserInfo()
        const userID = response.username
        const userEmail = response.email
        this.setState({userId: userID, email: userEmail})
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style = {styles.item}>
                    <Text style = {styles.heading}>Profile Information{"\n"}</Text>
                    <Text style = {{fontWeight: "bold"}}>ID: </Text>
                    <Text>{this.state.userId}{"\n"}</Text>
                    <Text style = {{fontWeight: "bold"}}>Email: </Text>
                    <Text>{this.state.email}{"\n"}</Text>
                </Text>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        marginLeft: 20,
        marginRight: 20,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderWidth:1,
        padding: 10,
    },
    heading: {
        fontsize: 30,
        height: 66,
        fontWeight: "bold",
    },
})


export default withAuthenticator(Profile, { includeGreeetings: false})