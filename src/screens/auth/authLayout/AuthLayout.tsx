import React from 'react';
import {ScrollView, Text} from 'react-native';
import {LogoGVImg} from '../../../assets/images';
import StaticImage from '../../../components/StaticImage';
import KeyboardAvoidingComponent from '../../../components/KeyboardAvoidingComponent';

type Props = {
  children: React.ReactNode;
  welcomeText?: string;
};

const AuthLayout = ({children, welcomeText}: Props) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        paddingHorizontal: 40,
      }}
      keyboardShouldPersistTaps="handled"
      style={{maxWidth: 360}}>
      <KeyboardAvoidingComponent
        behavior="padding"
        keyboardVerticalOffset={50}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <StaticImage source={LogoGVImg} imageWidth={220} />
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            color: 'black',
            fontWeight: 'bold',
          }}
          numberOfLines={2}>
          {welcomeText}
        </Text>
        {children}
      </KeyboardAvoidingComponent>
    </ScrollView>
  );
};

export default AuthLayout;
