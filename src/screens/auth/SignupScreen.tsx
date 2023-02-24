import React from 'react';
import {SafeAreaView} from 'react-native';
import AuthLayout from './authLayout/AuthLayout';
import LoginForm from './authLayout/LoginForm';

const SignupScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 20,
        backgroundColor: 'white',
      }}>
      <AuthLayout welcomeText="Create your account">
        <LoginForm />
      </AuthLayout>
    </SafeAreaView>
  );
};

export default SignupScreen;
