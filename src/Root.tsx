import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import NavigationRoot from './navigation/NavigationRoot';
import {sendLogin} from './services/UserService';
import {clothListState, outfitState, userState} from './recoil/atoms';
import {useSetRecoilState} from 'recoil';

const Root = () => {
  const setUser = useSetRecoilState(userState);
  const setClothes = useSetRecoilState(clothListState);
  const setOutfites = useSetRecoilState(outfitState);

  const fetchUser = React.useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user');
      jsonValue != null ? JSON.parse(jsonValue) : null;

      if (jsonValue) {
        const response = await sendLogin(JSON.parse(jsonValue));
        if (response.success) {
          setUser(response.user);
          setClothes(response.clothes);
          setOutfites(response.outfits);
        }
      }
    } catch (error) {
      await AsyncStorage.removeItem('@password');
      // setUser(null);
    }
  }, [setClothes, setOutfites, setUser]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const navigationReady = () => {
    console.log('navigation ready!');
    SplashScreen.hide();
  };

  return <NavigationRoot onReady={navigationReady} />;
};

export default Root;
