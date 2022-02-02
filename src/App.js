import * as React from 'react';
import 'react-native-gesture-handler';
import { Button } from 'react-native';
import { NavigationContainer, DrawerActions, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Auth } from "aws-amplify";
import FlashMessage from "react-native-flash-message";

import LandingScreen from './screens/Landing.js';
import SignInScreen from './screens/SignIn.js';
import SignUpScreen from './screens/SignUp.js';
//import ProfileScreen from './screens/Profile';
import HomeScreen from './screens/Home.js';
import ConfirmScreen from './screens/Confirm.js';


/* const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name = "Home" component = {HomeScreen} options = {{ headerShown: false }} />
            <Tab.Screen name = "Profile" component = {ProfileScreen} />
        </Tab.Navigator>
    );
};

const HomeDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component = {HomeTabs} options = {{ headerShown: false }} />
            <Drawer.Screen name = "Account" component = {AccountScreen} options = {{ headerShown: false }}/>
            <Drawer.Screen
                name = "Password Forget"
                component = {PasswordForgetScreen}
                options = {{ headerShown: false }}
            />
            <Drawer.Screen
                name = "Password Change"
                component = {PasswordChangeScreen}
                options = {{ headerShown: false }}
            />
            <Drawer.Screen name = "Admin" component = {AdminScreen} options = {{ headerShown: false }} />
        </Drawer.Navigator>
    );
}; */


const RootStack = createStackNavigator();

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const emailVal = React.createContext("");

    const handleSignIn = () => {
        //imlement actual sign in

    };

    const handleSignOut = () => {
        //implement actual sign out
        setIsAuthenticated(false);
    }

    const handleSignUp = ( {navigation} ) => {
        //implement actual sign up  
        navigation.navigate(ConfirmScreen);
    }

    return (
        <NavigationContainer>
            <RootStack.Navigator>
                {isAuthenticated ? (
                    <RootStack.Screen 
                        name = "Home" 
                        component = {HomeScreen}
                        options={{
                            headerRight: () => (
                              <Button onPress={handleSignOut} title="Sign Out" />
                            ),
                          }}
                    />
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
                                <SignInScreen {...props} onSignIn = {handleSignIn} LogIn = { setIsAuthenticated } />
                            )}
                        </RootStack.Screen> 
                        <RootStack.Screen name = "Sign Up">
                            {(props) => (
                                <SignUpScreen {...props} onSignUp = {handleSignUp} LogIn = { setIsAuthenticated } />
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