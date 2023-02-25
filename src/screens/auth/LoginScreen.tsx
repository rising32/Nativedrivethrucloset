import React from 'react';
import {SafeAreaView} from 'react-native';
import AuthLayout from './authLayout/AuthLayout';
import LoginForm from './authLayout/LoginForm';
import {LoginScreenProp} from '../../navigation/types';

const LoginScreen = ({navigation}: LoginScreenProp) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 20,
        backgroundColor: 'white',
      }}>
      <AuthLayout welcomeText="Enter your email and password to continue.">
        <LoginForm navigation={navigation} />
      </AuthLayout>
    </SafeAreaView>
  );
};

export default LoginScreen;
