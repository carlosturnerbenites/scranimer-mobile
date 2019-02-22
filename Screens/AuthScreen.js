import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Container } from 'native-base';

export default class AuthScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)
    this.state = {}

    this.login = this.login.bind(this);
  }

  login () {
    const { navigate } = this.props.navigation;
    navigate('Main')
  }

  render () {
    return (
      <Container>
        <Text>Auth</Text>
        <Button onPress={this.login}>
          <Text>Ingresar</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
