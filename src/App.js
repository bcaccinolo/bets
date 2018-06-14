import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import './App.css';
import Login from './components/Login';

import firebase from './lib/firebase';
import { authenticateUser } from './lib/users';



export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'not_authenticated', // 'not_authenticated', 'authenticated_first_time', 'authenticated'
      user: undefined,
      name: undefined
    };
  }

  render() {
    let show_login_page = (
      <p className="App-intro">
      {this.state.name}
      Loading app ...
    </p>
    )

    if (this.state.status === 'authenticated_first_time') {
      show_login_page = (
        <Login />
      )
    }

    return (
      <Grid container style={{ padding: '5em 0em' }}>
        { show_login_page }
      </Grid>
    );
  }

  componentDidMount() {
    authenticateUser(firebase, this.updateUserState);
  }

  // authentication callback to update the user state
  updateUserState = (snapshot) => {
    let status = 'not_authenticated';
    if(snapshot.val().name === undefined) {
      status = 'authenticated_first_time';
    } else {
      status = 'authenticated';
    }
    this.setState({
      status: status,
      uid: snapshot.val().uid,
      name: snapshot.val().name
    })
  }

}
