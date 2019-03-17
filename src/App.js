import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginFrom';

class App extends Component {
  state = { loggedIn: null };
  componentWillMount = () => {
    firebase.initializeApp({
      apiKey: 'AIzaSyDC4Zu3HN8G3LNHCMo_Gp6nexEYs-HYSfs',
      authDomain: 'auth-be962.firebaseapp.com',
      databaseURL: 'https://auth-be962.firebaseio.com',
      projectId: 'auth-be962',
      storageBucket: 'auth-be962.appspot.com',
      messagingSenderId: '899924675159'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  };

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View style={{ color: '#fff' }}>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
