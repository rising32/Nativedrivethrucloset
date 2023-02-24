import React from 'react';
import PublicScreens from './PublicScreens';
import AuthScreens from './AuthScreens';

type Props = {
  authenticated: boolean;
};

const AppNavigator = ({authenticated}: Props) => {
  if (authenticated) {
    return <AuthScreens />;
  }
  return <PublicScreens />;
};

export default AppNavigator;
