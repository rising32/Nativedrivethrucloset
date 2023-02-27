import React, {useState} from 'react';
import {ScrollView, Text, View, Image, ViewStyle} from 'react-native';
import {IOutfit} from '../../../recoil/interface';
import {EmptyImg} from '../../../assets/images';
import FastImage from 'react-native-fast-image';

type Props = {
  outfitList: IOutfit[];
  additionalStyle?: ViewStyle;
};

const OutfitItem = ({outfitList, additionalStyle}: Props) => {
  const [itemId, setItemId] = useState(0);
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
      <ScrollView
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal={true}
        onScroll={event => {
          setItemId(Math.round(event.nativeEvent.contentOffset.x / 370));
        }}>
        {outfitList.length > 0 ? (
          outfitList.map(item => (
            <View
              key={item._id}
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
            </View>
          ))
        ) : (
          <View
            key={'empty' + '0'}
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

export default OutfitItem;
