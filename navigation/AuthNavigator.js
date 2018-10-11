import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import AuthScreen from 'scranimer/Screens/AuthScreen';

const AuthStack = createStackNavigator({
  Auth: AuthScreen,
});

AuthStack.navigationOptions = {
  tabBarLabel: 'Auth'
};

export default AuthStack
