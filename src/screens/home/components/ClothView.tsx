import React from 'react';
import {Text, ScrollView, Dimensions} from 'react-native';
import useCloth from '../hooks/useCloth';
import ClothViewItem from './ClothViewItem';

const width = Dimensions.get('window').width;
const ClothView = () => {
  const {
    today,
    topList,
    middleList,
    bottomList,
    topFilter,
    middleFilter,
    bottomFilter,
    selectedTopCloth,
    onSelectCloth,
  } = useCloth();

  React.useEffect(() => {
    console.log(
      '_+_+_+_+_+_+_+_+',
      selectedTopCloth?.name,
      selectedTopCloth?.category,
      selectedTopCloth?._id,
    );
  }, [selectedTopCloth, onSelectCloth]);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 100,
        width,
      }}
      showsVerticalScrollIndicator={false}>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          marginVertical: 10,
        }}>
        {today}
      </Text>
      <ClothViewItem
        title={topFilter}
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
      <ClothViewItem
        title={middleFilter}
        position="middle"
        itemList={middleList}
        menuList={['pants', 'skirts', 'shorts', 'jumpsuits', 'dresses']}
        additionalStyle={{marginTop: 30}}
      />
      <ClothViewItem
        title={bottomFilter}
        position="bottom"
        itemList={bottomList}
        menuList={['bags', 'shoes', 'accessories']}
        additionalStyle={{marginTop: 30}}
      />
    </ScrollView>
  );
};

export default ClothView;
