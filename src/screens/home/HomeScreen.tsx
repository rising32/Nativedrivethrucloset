import {format} from 'date-fns';
import React from 'react';
import {Text, ScrollView} from 'react-native';
import {useRecoilValue} from 'recoil';
import {
  clothTopListFilterState,
  filteredClothTopListState,
  filteredClothMiddleListState,
  clothMiddleListFilterState,
  filteredClothBottomListState,
  clothBottomListFilterState,
} from '../../recoil/atoms';
import CloseItem from './clothItem/CloseItem';

const HomeScreen = () => {
  const today = format(new Date(), 'dd/MM/yyyy k:m:s');
  const topList = useRecoilValue(filteredClothTopListState);
  const topTitle = useRecoilValue(clothTopListFilterState);
  const middleList = useRecoilValue(filteredClothMiddleListState);
  const middleTitle = useRecoilValue(clothMiddleListFilterState);
  const bottomList = useRecoilValue(filteredClothBottomListState);
  const bottomTitle = useRecoilValue(clothBottomListFilterState);

  return (
    <ScrollView
      contentContainerStyle={{alignItems: 'center', paddingBottom: 100}}>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          marginVertical: 10,
        }}>
        {today}
      </Text>
      <CloseItem
        title={topTitle}
        position="top"
        itemList={topList}
        menuList={[
          'coats',
          'jackets',
          'blazers',
          'cardigans',
          'sweaters',
          'shirts',
          'tshirts',
        ]}
      />
      <CloseItem
        title={middleTitle}
        position="middle"
        itemList={middleList}
        menuList={['pants', 'skirts', 'shorts', 'jumpsuits', 'dresses']}
        additionalStyle={{marginTop: 30}}
      />
      <CloseItem
        title={bottomTitle}
        position="bottom"
        itemList={bottomList}
        menuList={['bags', 'shoes', 'accessories']}
        additionalStyle={{marginTop: 30}}
      />
    </ScrollView>
  );
};

export default HomeScreen;
