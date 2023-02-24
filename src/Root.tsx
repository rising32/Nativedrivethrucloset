import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import NavigationRoot from './navigation/NavigationRoot';

const Root = () => {
  useEffect(() => {
    fetchUser();
  }, []);

  const navigationReady = () => {
    console.log('navigation ready!');
    SplashScreen.hide();
  };

  async function fetchUser() {
    try {
      const token = await AsyncStorage.getItem('@App_token');
      if (token) {
        // const {data} = await HTTP_CLIENT.get<IUser>('users');
        // setUser(data);
      }
    } catch (error) {
      await AsyncStorage.removeItem('@App_token');
      // setUser(null);
    }
  }
  return <NavigationRoot onReady={navigationReady} authenticated={false} />;
};

export default Root;
