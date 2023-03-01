import React, {useRef} from 'react';
import {Text, View, Pressable, Image, ViewStyle} from 'react-native';
import {ICloth} from '../../../recoil/interface';
import {EmptyImg} from '../../../assets/images';
import useCloth, {Position} from '../hooks/useCloth';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';

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
  const carouselRef = useRef<ICarouselInstance>(null);
  const onUpdateFilter = (item: string) => {
    carouselRef.current?.scrollTo({index: 0, animated: true});
    updateFilter(position, item);
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
        {itemList.length > 0 ? (
          <Carousel
            ref={carouselRef}
            loop={false}
            width={370}
            height={400}
            data={itemList}
            onSnapToItem={index => onSelectCloth(position, index)}
            renderItem={({item}) => (
              <View
                style={{
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Image
                  source={{uri: item.url}}
                  style={{width: 350, height: 350, resizeMode: 'contain'}}
                />
              </View>
            )}
          />
        ) : (
          <Image
            source={EmptyImg}
            style={{width: 350, height: 350, resizeMode: 'contain'}}
          />
        )}
      </View>
    </View>
  );
};

export default ClothViewItem;
