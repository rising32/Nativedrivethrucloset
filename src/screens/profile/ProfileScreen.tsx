import React from 'react';
import {ScrollView} from 'react-native';
import {useRecoilValue} from 'recoil';
import {outfitState} from '../../recoil/atoms';
import OutfitItem from './outfitItem/OutfitItem';

const ProfileScreen = () => {
  const outfitList = useRecoilValue(outfitState);
  return (
    <ScrollView
      contentContainerStyle={{alignItems: 'center', paddingBottom: 100}}>
      <OutfitItem outfitList={outfitList} additionalStyle={{marginTop: 30}} />
    </ScrollView>
  );
};

export default ProfileScreen;
