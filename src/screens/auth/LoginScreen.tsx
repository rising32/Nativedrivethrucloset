import React from 'react';
import {SafeAreaView} from 'react-native';
import AuthLayout from './authLayout/AuthLayout';
import LoginForm from './authLayout/LoginForm';

const LoginScreen = () => {
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
        <LoginForm />
      </AuthLayout>
    </SafeAreaView>
  );
};

export default LoginScreen;
