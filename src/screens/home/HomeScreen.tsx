import React from 'react';
import {View} from 'react-native';
import ClothView from './components/ClothView';
import SaveModal from './components/SaveModal';

const HomeScreen = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ClothView />
      <SaveModal />
    </View>
  );
};

export default HomeScreen;
