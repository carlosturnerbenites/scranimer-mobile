import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import AppNavigator from 'scranimer/navigation/AppNavigator';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigator></AppNavigator>
    );
  }
}

const styles = StyleSheet.create({});
