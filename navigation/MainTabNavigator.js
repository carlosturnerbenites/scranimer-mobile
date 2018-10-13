import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { AppRegistry } from 'react-native';

import TabBarIcon from 'scranimer/components/TabBarIcon';
import HomeScreen from 'scranimer/Screens/HomeScreen';
import AnimeScreen from 'scranimer/Screens/AnimeScreen';
import SettingsScreen from 'scranimer/Screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Anime: AnimeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const screens = createBottomTabNavigator({
  HomeStack,
  SettingsStack,
});

// AppRegistry.registerComponent('myApp', () => screens);

export default screens
