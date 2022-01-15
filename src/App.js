import * as React from 'react';
import 'react-native-gesture-handler';
import { Button } from 'react-native';
import { NavigationContainer, DrawerActions, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LandingScreen from './screens/Landing';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import PasswordForgetScreen from './screens/PasswordForget';
import PasswordChangeScreen from './screens/PasswordChange';
import AccountScreen from './screens/Account';
import ProfileScreen from './screens/Profile';
import AdminScreen from './screens/Admin';
import HomeScreen from './screens/Home';

const Drawer = createDrawerNavigator();

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
};


const RootStack = createStackNavigator();

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    const handleSignIn = () => {
        //imlement actual sign in

        setIsAuthenticated(true);
    };

    const handleSignOut = () => {
        //implement actual sign out

        setIsAuthenticated(false);
    }

    const handleSignUp = () => {
        //implement actual sign up

        setIsAuthenticated(true);
    }

    return (
        <NavigationContainer>
            <RootStack.Navigator>
                {isAuthenticated ? (
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
                ) : (
                    <>
                        <RootStack.Screen 
                            name = "Landing" 
                            component = {LandingScreen} 
                            options = {{
                                animationTypeForReplace: 'pop'
                            }}
                        />
                        <RootStack.Screen name = "Sign In">
                            {(props) => (
                                <SignInScreen {...props} onSignIn = {handleSignIn} />
                            )}
                        </RootStack.Screen> 
                        <RootStack.Screen name = "Sign Up">
                            {(props) => (
                                <SignUpScreen {...props} onSignUp = {handleSignUp} />
                            )}
                        </RootStack.Screen>
                        <RootStack.Screen 
                            name = "Password Forget"
                            component = {PasswordForgetScreen}
                        />
                    </>
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default App;