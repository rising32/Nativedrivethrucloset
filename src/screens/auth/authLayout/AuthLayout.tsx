import React, {useEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import {LogoGVImg} from '../../../assets/images';
import StaticImage from '../../../components/StaticImage';
import {AvoidSoftInput, AvoidSoftInputView} from 'react-native-avoid-softinput';

type Props = {
  children: React.ReactNode;
  welcomeText?: string;
};

const AuthLayout = ({children, welcomeText}: Props) => {
  useEffect(() => {
    AvoidSoftInput.setShouldMimicIOSBehavior(true);
    AvoidSoftInput.setEnabled(true);
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{flex: 1, paddingHorizontal: 40}}
      keyboardShouldPersistTaps="handled"
      style={{maxWidth: 360}}>
      <AvoidSoftInputView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <StaticImage source={LogoGVImg} imageWidth={250} />
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
      </AvoidSoftInputView>
    </ScrollView>
  );
};

export default AuthLayout;
