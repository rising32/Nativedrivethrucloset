import React from 'react';
import WelcomeScreen from '../../screens/WelcomeScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import {PUBLICSCREENS, PublicRootStackParamList} from '../types';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignUpScreen from '../../screens/auth/SignUpScreen';

const PublicStack = createStackNavigator<PublicRootStackParamList>();

const PublicScreens = () => (
  <PublicStack.Navigator
    initialRouteName={PUBLICSCREENS.WELCOME}
    screenOptions={{
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }}>
    <PublicStack.Screen
      name={PUBLICSCREENS.WELCOME}
      component={WelcomeScreen}
    />
    <PublicStack.Screen
      name={PUBLICSCREENS.LOGIN}
      component={LoginScreen}
      // options={{...TransitionPresets.SlideFromRightIOS}}
    />
    <PublicStack.Screen
      name={PUBLICSCREENS.SIGNUP}
      component={SignUpScreen}
      // options={{...TransitionPresets.SlideFromRightIOS}}
    />
  </PublicStack.Navigator>
);

export default PublicScreens;
