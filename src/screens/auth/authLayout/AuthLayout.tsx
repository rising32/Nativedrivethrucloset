import React, {useCallback} from 'react';
import {ScrollView, Text} from 'react-native';
import {LogoGVImg} from '../../../assets/images';
import StaticImage from '../../../components/StaticImage';
import {AvoidSoftInput} from 'react-native-avoid-softinput';
import {useFocusEffect} from '@react-navigation/native';

type Props = {
  children: React.ReactNode;
  welcomeText?: string;
};

const AuthLayout = ({children, welcomeText}: Props) => {
  const onFocusEffect = useCallback(() => {
    AvoidSoftInput.setShouldMimicIOSBehavior(true);
    AvoidSoftInput.setEnabled(true);
    return () => {
      AvoidSoftInput.setEnabled(false);
      AvoidSoftInput.setShouldMimicIOSBehavior(false);
    };
  }, []);

  useFocusEffect(onFocusEffect);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 40,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      keyboardShouldPersistTaps="handled"
      style={{maxWidth: 360}}>
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
    </ScrollView>
  );
};

export default AuthLayout;
