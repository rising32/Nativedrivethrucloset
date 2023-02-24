import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type PublicRootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
};
export enum PUBLICSCREENS {
  WELCOME = 'Welcome',
  LOGIN = 'Login',
  SIGNUP = 'Signup',
}

export type AuthenticatedRootStackParamList = {
  home: undefined;
  camera: undefined;
  profile: undefined;
};

export enum AUTHENTICATEDSCREENS {
  HOME = 'home',
  CAMERA = 'camera',
  PROFILE = 'profile',
}

export type WelcomeScreenProp = NativeStackScreenProps<
  PublicRootStackParamList,
  PUBLICSCREENS.WELCOME
>;
export type LoginScreenProp = NativeStackScreenProps<
  PublicRootStackParamList,
  PUBLICSCREENS.LOGIN
>;
