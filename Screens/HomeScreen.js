import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon } from 'native-base';
import { db } from 'scranimer/firebase';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)
    this.state = {
      animes: []
    }
    this.showAnime = this.showAnime.bind(this);
  }

  showAnime (anime) {
    const { navigate } = this.props.navigation;
    navigate('Anime', { anime })
  }

  render () {
    var items = this.state.animes;
    return (
      <Container>
        <Header />
        <Content>
          <List
            dataArray={items}
            renderRow={(item) =>
              <ListItem button avatar onPress={() => this.showAnime(item)}>
                <Left>
                  <Thumbnail source={{ uri: item.image }} />
                </Left>
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                  <Icon name="ios-heart" style={{ color: 'red' }} />
                </Right>
              </ListItem>
            }
          >
          </List>
        </Content>
      </Container>
    );
  }
  componentDidMount () {
    var animesRef = db.collection('animes');
    var query = animesRef
      // .where('capital', '==', true)
      .get()
      .then(snapshot => {
        let animes = []
        snapshot.forEach(doc => {
          animes.push(doc.data())
          // doc.id
        });
        this.setState({ animes })
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
  }
}

const styles = StyleSheet.create({});
