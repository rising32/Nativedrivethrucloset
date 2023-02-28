import {format} from 'date-fns';
import React, {useState} from 'react';
import {
  Text,
  ScrollView,
  Pressable,
  View,
  TextInput,
  Dimensions,
} from 'react-native';
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
import Modal from 'react-native-modal';

const width = Dimensions.get('window').width;
const HomeScreen = () => {
  const today = format(new Date(), 'dd/MM/yyyy k:m:s');
  const topList = useRecoilValue(filteredClothTopListState);
  const topTitle = useRecoilValue(clothTopListFilterState);
  const middleList = useRecoilValue(filteredClothMiddleListState);
  const middleTitle = useRecoilValue(clothMiddleListFilterState);
  const bottomList = useRecoilValue(filteredClothBottomListState);
  const bottomTitle = useRecoilValue(clothBottomListFilterState);

  const [isModalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const saveOutfit = () => {
    if (text === '') {
      return;
    }
    //// working now...
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
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
      <Pressable
        onPress={toggleModal}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'deepskyblue' : 'burlywood',
          },
          {
            position: 'absolute',
            marginTop: 'auto',
            marginBottom: 'auto',
            right: 10,
            paddingHorizontal: 10,
            paddingVertical: 3,
            borderRadius: 15,
          },
        ]}>
        <Text style={{color: 'white'}}>Align & Save</Text>
      </Pressable>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 22,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            borderColor: 'rgba(0, 0, 0, 0.1)',
            flexDirection: 'column',
            rowGap: 30,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>
            Name and Save your outfit
          </Text>
          <TextInput
            style={{
              width: 200,
              height: 40,
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              textAlign: 'center',
            }}
            onChangeText={onChangeText}
            value={text}
          />
          <Pressable
            onPress={saveOutfit}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'deepskyblue' : 'burlywood',
              },
              {
                paddingHorizontal: 30,
                paddingVertical: 8,
                borderRadius: 30,
              },
            ]}>
            <Text style={{color: 'white'}}>Save</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
