import React, { Component } from 'react';
import { render } from 'react-dom';
import { Platform, View, Text, TouchableOpacity, PermissionsAndroid, StyleSheet } from 'react-native';
import MapView, { AnimatedRegion, Polyline, Marker, PROVIDER_GOOGLE } from 'react-native-maps'; 
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { Reachability } from '@aws-amplify/core';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

class MapScreen extends React.Component {
    /* constructor(props) {
        super(props);
        this.state = {
          latitude: LATITUDE,
          longitude: LONGITUDE,
          routeCoordinates: [],
          distanceTravelled: 0,
          prevLatLng: {},
          coordinate: new AnimatedRegion({
           latitude: LATITUDE,
           longitude: LONGITUDE
          })
        };
    }
 */
    state = {
        location: {},
        errorMessage: "",
    }

    componentWillMount() {
        this._getlocation();
    }

    _getlocation = async () => {
        const { status } = await Permissions.askAsync(Permissions.Location);

        if (status !== 'granted') {
            console.log("Permission not granted!");
            this.setState({
                errorMessage: 'Permission not granted!'
            })
        }

        const location = await Location.getCurrentPositionAsync();

        this.setState({
            location
        })

    }

    render() {
        return (
            <View style = {styles.container}>
                <Text> {JSON.stringify(this.state.location)} </Text>
            </View>
        )
    }

/*     return (
        <View style={styles.container}>
            <MapView 
                style={styles.map}
                provider = { PROVIDER_GOOGLE } 
            />
        </View>
    ); */
}

export default MapScreen; 