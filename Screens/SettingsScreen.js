import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';

export default class SettingsScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Text>Settings</Text>
    );
  }
}

const styles = StyleSheet.create({});
