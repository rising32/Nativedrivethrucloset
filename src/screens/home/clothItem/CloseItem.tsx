import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Pressable,
  Image,
  ViewStyle,
} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {
  clothTopListFilterState,
  clothMiddleListFilterState,
  clothBottomListFilterState,
} from '../../../recoil/atoms';
import {ICloth} from '../../../recoil/interface';
import {EmptyImg} from '../../../assets/images';

type Props = {
  title: string;
  position: 'top' | 'middle' | 'bottom';
  itemList: ICloth[];
  menuList: string[];
  additionalStyle?: ViewStyle;
};

const CloseItem = ({
  title,
  position,
  itemList,
  menuList,
  additionalStyle,
}: Props) => {
  const setTopFilter = useSetRecoilState(clothTopListFilterState);
  const setMiddleFilter = useSetRecoilState(clothMiddleListFilterState);
  const setBottomFilter = useSetRecoilState(clothBottomListFilterState);

  const updateFilter = (item: string) => {
    if (position === 'top') {
      setTopFilter(item);
    } else if (position === 'middle') {
      setMiddleFilter(item);
    } else {
      setBottomFilter(item);
    }
  };
  return (
    <View
      style={[
        {
          alignItems: 'center',
          backgroundColor: 'white',
          width: 374,
          borderRadius: 15,
          borderWidth: 2,
          marginTop: 10,
        },
        additionalStyle,
      ]}>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          marginVertical: 10,
          color: 'white',
          position: 'absolute',
          top: -20,
          zIndex: 10,
          backgroundColor: 'black',
          paddingHorizontal: 10,
          paddingVertical: 3,
          borderRadius: 20,
        }}>
        {title + ' (' + itemList.length + ')'}
      </Text>
      <View
        style={{
          position: 'absolute',
          left: -15,
          top: 0,
          bottom: 0,
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-evenly',
        }}>
        {menuList.map(item => (
          <Pressable key={item} onPress={() => updateFilter(item)}>
            <Text
              style={{
                fontSize: 16,
                textAlign: 'center',
                color: 'white',
                zIndex: 10,
                backgroundColor: item === title ? 'red' : 'black',
                paddingHorizontal: 10,
                paddingVertical: 3,
                borderRadius: 20,
                textTransform: 'capitalize',
              }}>
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
      <ScrollView
        snapToInterval={370}
        decelerationRate={0.85}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        {itemList.length > 0 ? (
          itemList.map(item => (
            <View
              key={title + item._id}
              style={{
                alignItems: 'center',
                padding: 10,
              }}>
              <Image
                source={{uri: item.url}}
                style={{width: 350, height: 350, resizeMode: 'contain'}}
              />
            </View>
          ))
        ) : (
          <View
            key={title + '0'}
            style={{
              alignItems: 'center',
              padding: 10,
            }}>
            <Image
              source={EmptyImg}
              style={{width: 350, height: 350, resizeMode: 'contain'}}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default CloseItem;
