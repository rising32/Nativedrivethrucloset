import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CustomStatusBar from './components/CustomStatusBar';
import {RecoilRoot} from 'recoil';
import Root from './Root';
import ComposeProviders from './components/ComposeProviders';
import SafeArea from './components/SafeArea';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ComposeProviders components={[SafeAreaProvider, SafeArea, RecoilRoot]}>
        <CustomStatusBar />
        <Root />
      </ComposeProviders>
    </GestureHandlerRootView>
  );
};

export default App;
