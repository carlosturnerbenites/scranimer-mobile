import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Lightbox from 'react-native-lightbox';

import { db } from 'scranimer/firebase';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)

    const { navigation } = props;
    const anime = navigation.getParam('anime', null);
    this.state = {
      anime
    }
  }

  render () {
    var item = this.state.anime;
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: item.image }} />
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Lightbox navigator={this.props.navigator}>
                <Image
                  source={{ uri: item.image }}
                  style={{ height: 200, width: null, flex: 1 }}
                  resizeMode="contain"
                />
              </Lightbox>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
