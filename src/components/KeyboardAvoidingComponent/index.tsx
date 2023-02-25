import React from 'react';
import {View, KeyboardAvoidingViewProps} from 'react-native';
import _ from 'underscore';

type Props = KeyboardAvoidingViewProps;

const KeyboardAvoidingComponent = ({...props}: Props) => {
  const viewProps = _.omit(props, [
    'behavior',
    'contentContainerStyle',
    'enabled',
    'keyboardVerticalOffset',
  ]);
  return <View {...viewProps} />;
};

export default KeyboardAvoidingComponent;
