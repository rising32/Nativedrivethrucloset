import React, {useState, useRef} from 'react';
import {Text, View, Image, ViewStyle} from 'react-native';
import {IOutfit} from '../../../recoil/interface';
import {EmptyImg} from '../../../assets/images';
import FastImage from 'react-native-fast-image';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
type Props = {
  outfitList: IOutfit[];
  additionalStyle?: ViewStyle;
};

const OutfitItem = ({outfitList, additionalStyle}: Props) => {
  const [itemId, setItemId] = useState(0);

  const carouselRef = useRef<ICarouselInstance>(null);
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
        {outfitList[itemId].title}
      </Text>
      {outfitList.length > 0 ? (
        <Carousel
          ref={carouselRef}
          loop={false}
          width={370}
          height={500}
          data={outfitList}
          onSnapToItem={index => setItemId(index)}
          renderItem={({item}) => (
            <View
              style={{
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingVertical: 30,
              }}>
              <FastImage
                source={{uri: item.clothes[0].url}}
                style={{width: 350, height: 150}}
                resizeMode={FastImage.resizeMode.contain}
              />
              <FastImage
                source={{uri: item.clothes[1].url}}
                style={{width: 350, height: 150}}
                resizeMode={FastImage.resizeMode.contain}
              />
              <FastImage
                source={{uri: item.clothes[2].url}}
                style={{width: 350, height: 150}}
                resizeMode={FastImage.resizeMode.contain}
              />
              {/* <Image
                source={{uri: item.clothes[0].url}}
                style={{width: 350, height: 150, resizeMode: 'contain'}}
              />
              <Image
                source={{uri: item.clothes[1].url}}
                style={{width: 350, height: 150, resizeMode: 'contain'}}
              />
              <Image
                source={{uri: item.clothes[2].url}}
                style={{width: 350, height: 150, resizeMode: 'contain'}}
              /> */}
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
  );
};

export default OutfitItem;
