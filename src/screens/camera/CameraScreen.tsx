import React from 'react';
import {View} from 'react-native';
import Swiper from '../../components/Swiper';

const CameraScreen = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Swiper />
    </View>
  );
};

export default CameraScreen;
