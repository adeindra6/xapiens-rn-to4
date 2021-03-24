import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  SplashScreen,
  Home1Screen,
  Home2Screen,
  Home3Screen,
  LoginScreen,
  SignUpScreen,
  WelcomeScreen,
  ProfileScreen,
} from '@screens';

import AuthProvider from '@contexts/auth';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Splash"
            component={SplashScreen}
            options={{
              title: 'Splash',
              headerStyle: {
                backgroundColor: 'green',
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Drawer.Screen
            name="Home1"
            component={Home1Screen}
            options={{
              title: 'Home 1',
              headerStyle: {
                backgroundColor: 'green',
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Drawer.Screen
            name="Home2"
            component={Home2Screen}
            options={{
              title: 'Home 2',
              headerStyle: {
                backgroundColor: 'green',
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Drawer.Screen
            name="Home3"
            component={Home3Screen}
            options={{
              title: 'Home 3',
              headerStyle: {
                backgroundColor: 'green',
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Drawer.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'Login',
              headerStyle: {
                backgroundColor: 'green',
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Drawer.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              title: 'Sign Up',
              headerStyle: {
                backgroundColor: 'green',
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Drawer.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              title: 'Welcome',
              headerStyle: {
                backgroundColor: 'green',
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Drawer.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: 'Profile',
              headerStyle: {
                backgroundColor: 'green',
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Drawer.Navigator>
        </AuthProvider>
      </NavigationContainer>
    </>
  );
};

export default App;