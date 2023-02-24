import React from 'react';
import {Image, ImageProps, ImageSourcePropType} from 'react-native';

interface Props extends ImageProps {
  source: ImageSourcePropType;
  imageWidth: number;
}

const StaticImage = ({source, imageWidth, ...rest}: Props) => {
  const {width, height} = Image.resolveAssetSource(source);
  const widthRatio = height / width;
  return (
    <Image
      source={source}
      style={{width: imageWidth, height: imageWidth * widthRatio}}
      {...rest}
    />
  );
};

export default StaticImage;
