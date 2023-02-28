import React, {useRef} from 'react';
import {
  ScrollView,
  Text,
  View,
  Pressable,
  Image,
  ViewStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {ICloth} from '../../../recoil/interface';
import {EmptyImg} from '../../../assets/images';
import useCloth, {Position} from '../hooks/useCloth';

type Props = {
  title: string;
  position: Position;
  itemList: ICloth[];
  menuList: string[];
  additionalStyle?: ViewStyle;
};

const ClothViewItem = ({
  title,
  position,
  itemList,
  menuList,
  additionalStyle,
}: Props) => {
  const {updateFilter, onSelectCloth} = useCloth();
  const scrollRef = useRef<ScrollView>(null);
  const onUpdateFilter = (item: string) => {
    scrollRef.current?.scrollTo({x: 0, y: 0, animated: true});
    updateFilter(position, item);
  };
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / 370);

    onSelectCloth(position, index);
  };

  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
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
            <Pressable key={item} onPress={() => onUpdateFilter(item)}>
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
          ref={scrollRef}
          pagingEnabled
          snapToStart
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          onScroll={onScroll}>
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
    </View>
  );
};

export default ClothViewItem;
