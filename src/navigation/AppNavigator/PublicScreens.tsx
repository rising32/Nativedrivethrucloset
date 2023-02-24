import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../../screens/WelcomeScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import {PUBLICSCREENS, PublicRootStackParamList} from '../types';
import SignupScreen from '../../screens/auth/SignupScreen';

const PublicStack = createNativeStackNavigator<PublicRootStackParamList>();

const PublicScreens = () => (
  <PublicStack.Navigator
    initialRouteName={PUBLICSCREENS.WELCOME}
    screenOptions={{
      headerShown: false,
      navigationBarColor: 'white',
    }}>
    <PublicStack.Screen
      name={PUBLICSCREENS.WELCOME}
      component={WelcomeScreen}
    />
    <PublicStack.Screen name={PUBLICSCREENS.LOGIN} component={LoginScreen} />
    <PublicStack.Screen name={PUBLICSCREENS.SIGNUP} component={SignupScreen} />
  </PublicStack.Navigator>
);

export default PublicScreens;
