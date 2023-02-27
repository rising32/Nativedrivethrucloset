import {format} from 'date-fns';
import React from 'react';
import {View, Text, FlatList, Dimensions, Image} from 'react-native';
import {useRecoilValue} from 'recoil';
import {filteredClothTopListState} from '../../recoil/selectors';
import {ICloth} from '../../recoil/interface';

const width = Dimensions.get('window').width;
const HomeScreen = () => {
  const today = format(new Date(), 'dd/MM/yyyy k:m:s');
  const todoList = useRecoilValue(filteredClothTopListState);
  const Item = ({item}: {item: ICloth}) => {
    return (
      <View>
        <Image
          source={{uri: item.url}}
          style={{width: 400, height: 400, borderRadius: 15}}
        />
      </View>
    );
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          marginVertical: 10,
        }}>
        {today}
      </Text>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
        }}>
        <View
          style={{
            borderRadius: 15,
            marginTop: 25,
            borderWidth: 4,
            borderColor: 'black',
            borderStyle: 'solid',
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
            width: 400,
            height: 400,
          }}>
          <FlatList
            data={todoList}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item._id}
            horizontal
            snapToInterval={400}
            decelerationRate={0.95}
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
