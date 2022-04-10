import * as React from 'react';
import 'react-native-gesture-handler';
import { Button } from 'react-native';
import { NavigationContainer, DrawerActions, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Amplify, { Auth } from "aws-amplify";
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';

//import FlashMessage from "react-native-flash-message";
import {
    Platform,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Text,
    Switch,
  } from 'react-native';
//import {PROVIDER_GOOGLE, PROVIDER_DEFAULT} from '../index';

import LandingScreen from './screens/Landing.js';
import SignInScreen from './screens/SignIn.js';
import SignUpScreen from './screens/SignUp.js';
//import ProfileScreen from './screens/Profile';
import Home from './screens/Home.js';
import ConfirmScreen from './screens/Confirm.js';
import MapScreen from './screens/Map.js';
import Profile from './screens/Profile.js';
import Friend from './screens/Friends.js';

const Drawer = createDrawerNavigator();

const IOS = Platform.OS === 'ios';
const ANDROID = Platform.OS === 'android';

/*
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name = "Home" component = {HomeScreen} options = {{ headerShown: false }} />
            <Tab.Screen name = "Profile" component = {ProfileScreen} />
        </Tab.Navigator>
    );
};
*/
const RootStack = createStackNavigator();

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePass] = React.useState("");
    const emailVal = React.createContext("");
    const fields = {
        Email: email,
        Password: password,
        ChangeEmail: onChangeEmail,
        ChangePass: onChangePass,
    }

    const handleSignIn = () => {
        //imlement actual sign in

    };

    const handleSignOut = () => {
        //implement actual sign out
        Auth.signOut();
        setIsAuthenticated(false);
    }

    const handleSignUp = ( {navigation} ) => {
        //implement actual sign up  
        navigation.navigate(ConfirmScreen);
    }

    
    const HomeDrawer = () => {
        console.log(fields);
        return (
            <Drawer.Navigator>
                <Drawer.Screen name = "Home" component = {Home} options = {{ headerShown: false }} />
                <Drawer.Screen name = "Map" component = {MapScreen} options = {{ headerShown: false }}/>
                <Drawer.Screen name = "Profile" options = {{ headerShown: false }}>
                            {(props) => (
                                <Profile {...props} vars = {fields} />
                            )}
                </Drawer.Screen> 
                <Drawer.Screen name = "Add Friends" component = {Friend} options = {{ headerShown: false }} vars = {fields}/>
            </Drawer.Navigator>
        );
    };

    return (
        <NavigationContainer>
            <RootStack.Navigator>
                {isAuthenticated ? (
                    <>
                        <RootStack.Screen 
                            name = "Home" 
                            component = {HomeDrawer}
                            options = { ({ route, navigation }) => ({
                                headerTitle: getFocusedRouteNameFromRoute(route),
                                headerLeft: () => (
                                    <Button
                                        onPress = {() =>
                                            navigation.dispatch(DrawerActions.toggleDrawer())
                                        }
                                        title = "Menu"
                                    />
                                ),
                                headerRight: () => (
                                    <Button onPress = {handleSignOut} title = "Sign Out" />
                                ),
                            })}
                        />
                    </>
                    
                ) : (
                    <>
                        <RootStack.Screen 
                            name = "Cal Me Maybe" 
                            component = {LandingScreen} 
                            options = {{
                                animationTypeForReplace: 'pop'
                            }}
                        />
                        <RootStack.Screen name = "Sign In">
                            {(props) => (
                                <SignInScreen {...props} onSignIn = {handleSignIn} LogIn = { setIsAuthenticated } params = {fields} />
                            )}
                        </RootStack.Screen> 
                        <RootStack.Screen name = "Sign Up">
                            {(props) => (
                                <SignUpScreen {...props} onSignUp = {handleSignUp} LogIn = { setIsAuthenticated } params = {fields} />
                            )}
                        </RootStack.Screen>
                        <RootStack.Screen name = "Confirm Screen">
                            {(props) => (
                                <ConfirmScreen {...props} LogIn = { setIsAuthenticated } />
                            )}
                        </RootStack.Screen>
                    </>
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    );

};

export default App; 