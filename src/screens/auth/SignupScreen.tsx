import React from 'react';
import {SafeAreaView} from 'react-native';
import AuthLayout from './authLayout/AuthLayout';
import {SignUpScreenProp} from '../../navigation/types';
import SignUpForm from './authLayout/SignUpForm';

const SignUpScreen = ({navigation}: SignUpScreenProp) => {
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
        <SignUpForm navigation={navigation} />
      </AuthLayout>
    </SafeAreaView>
  );
};

export default SignUpScreen;
