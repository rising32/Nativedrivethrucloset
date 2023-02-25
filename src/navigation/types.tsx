import {StackScreenProps} from '@react-navigation/stack';

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

export type WelcomeScreenProp = StackScreenProps<
  PublicRootStackParamList,
  PUBLICSCREENS.WELCOME
>;
export type LoginScreenProp = StackScreenProps<
  PublicRootStackParamList,
  PUBLICSCREENS.LOGIN
>;
export type SignUpScreenProp = StackScreenProps<
  PublicRootStackParamList,
  PUBLICSCREENS.SIGNUP
>;
