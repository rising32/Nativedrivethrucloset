import React from 'react';
import {KeyboardAvoidingView, KeyboardAvoidingViewProps} from 'react-native';

type Props = KeyboardAvoidingViewProps;

const KeyboardAvoidingComponent = ({...props}: Props) => {
  return <KeyboardAvoidingView {...props} />;
};

export default KeyboardAvoidingComponent;
