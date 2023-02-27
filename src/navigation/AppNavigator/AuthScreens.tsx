import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AUTHENTICATEDSCREENS, AuthenticatedRootStackParamList} from '../types';
import {Image, Pressable, Text} from 'react-native';
import {HomeImg, PlusImg, ProfileImg} from '../../assets/images';
import HomeScreen from '../../screens/home/HomeScreen';
import CameraScreen from '../../screens/camera/CameraScreen';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import {useSetRecoilState} from 'recoil';
import {userState} from '../../recoil/atoms';

const BottomStack = createBottomTabNavigator<AuthenticatedRootStackParamList>();

const AuthScreens = () => {
  const setUser = useSetRecoilState(userState);
  return (
    <BottomStack.Navigator
      initialRouteName={AUTHENTICATEDSCREENS.HOME}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === AUTHENTICATEDSCREENS.HOME) {
            iconName = HomeImg;
          } else if (route.name === AUTHENTICATEDSCREENS.CAMERA) {
            iconName = PlusImg;
          } else {
            iconName = ProfileImg;
          }
          return (
            <Image
              source={iconName}
              style={{width: 45, height: 45, tintColor: color}}
            />
          );
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          left: 48,
          right: 48,
          borderRadius: 15,
          backgroundColor: 'black',
        },
        tabBarLabelStyle: {
          display: 'none',
        },
      })}>
      <BottomStack.Screen
        name={AUTHENTICATEDSCREENS.HOME}
        component={HomeScreen}
        options={{
          title: 'Daily Inspiration',
          headerTitleAlign: 'center',
          headerRightContainerStyle: {
            paddingRight: 15,
          },
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 24,
          },
          headerRight: () => (
            <Pressable
              onPress={() => setUser(null)}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'deepskyblue' : 'burlywood',
                },
                {
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  paddingVertical: 3,
                },
              ]}>
              <Text style={{color: 'white'}}>Log Out</Text>
            </Pressable>
          ),
        }}
      />
      <BottomStack.Screen
        name={AUTHENTICATEDSCREENS.CAMERA}
        component={CameraScreen}
      />
      <BottomStack.Screen
        name={AUTHENTICATEDSCREENS.PROFILE}
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerTitleAlign: 'center',
          headerRightContainerStyle: {
            paddingRight: 15,
          },
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 24,
          },
          headerRight: () => (
            <Pressable
              onPress={() => setUser(null)}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'deepskyblue' : 'burlywood',
                },
                {
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  paddingVertical: 3,
                },
              ]}>
              <Text style={{color: 'white'}}>Log Out</Text>
            </Pressable>
          ),
        }}
      />
    </BottomStack.Navigator>
  );
};

export default AuthScreens;
