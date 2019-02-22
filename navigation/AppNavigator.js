import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from 'scranimer/navigation/MainTabNavigator';
import AuthNavigator from 'scranimer/navigation/AuthNavigator';

export default createSwitchNavigator({
  Main: MainTabNavigator,
  Auth: AuthNavigator,
}, {
    initialRouteName: 'Auth',
});
