import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import FullScreenLoadingIndicator from '../components/FullScreenLoadingIndicator';
import AppNavigator from './AppNavigator';

type Props = {
  onReady: () => void;
  authenticated: boolean;
};

const NavigationRoot = ({onReady, authenticated}: Props) => {
  return (
    <NavigationContainer
      fallback={
        <FullScreenLoadingIndicator loadingText="Navigation Fallback Loader" />
      }
      onReady={onReady}>
      <AppNavigator authenticated={authenticated} />
    </NavigationContainer>
  );
};

export default NavigationRoot;
