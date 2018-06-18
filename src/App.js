import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import _ from 'lodash';

import './App.css';
import TopBar from './components/TopBar';
import Login from './components/Login';
import Matches from './components/Matches';

import firebase from './lib/firebase';
import { authenticateUser, updateUserName } from './lib/users';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'not_authenticated', // 'not_authenticated', 'authenticated_first_time', 'authenticated'
      uid: undefined,
      name: undefined
    };
  }

  render = () => {
    let content = 'Loading app ...'
    if (this.state.status === 'authenticated_first_time') {
      content = <Login onSubmit={this.onSubmit}/>
    } else if (this.state.status === 'authenticated') {
      content = <Matches firebase={firebase} userId={this.state.uid} />
    }

    return (
      <div>
      <TopBar />
      <Grid container style={{ marginTop: '5px', padding: '5em 0em' }}>
        { content }
      </Grid>
      </div>    );
  }

  componentDidMount= () => {
    authenticateUser(firebase, this.updateUserState);
  }

  // authentication callback to update the user state
  updateUserState = (snapshot) => {
    let status = 'not_authenticated';
    let name = '';
    let uid = snapshot.key; // user uid

    if((snapshot.val() === null) || (snapshot.val().name === undefined)) {
      status = 'authenticated_first_time';
    } else {
      status = 'authenticated';
      name = snapshot.val().name;
    }
    this.setState({ status: status, uid: uid, name: name });
  }

  onSubmit = (loginState) => {
    if (! _.isEmpty(loginState.name)) {
      this.setState({name: loginState.name, status: 'authenticated'});
      updateUserName(firebase, this.state.uid, loginState.name);
    }
  }


}
