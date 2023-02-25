import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {LogoGVImg} from '../assets/images';
import StaticImage from '../components/StaticImage';
import {PUBLICSCREENS, WelcomeScreenProp} from '../navigation/types';

const WelcomeScreen = ({navigation}: WelcomeScreenProp) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 20,
        backgroundColor: 'white',
      }}>
      <StaticImage source={LogoGVImg} imageWidth={220} />
      <Text>Let's go for a Fashionable Spin</Text>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          paddingVertical: 10,
          width: 200,
          borderRadius: 15,
          marginTop: 10,
        }}
        onPress={() => {
          navigation.push(PUBLICSCREENS.LOGIN);
        }}>
        <Text style={{color: 'white'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
          width: 200,
          borderRadius: 15,
          borderColor: 'black',
          borderWidth: 1,
        }}
        onPress={() => {
          navigation.push(PUBLICSCREENS.SIGNUP);
        }}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
