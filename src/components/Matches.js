import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

import {getMatches} from '../lib/matches';
import Match from './Match';

export default class BaseComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      matches: []
     };
  }

  render = () => {
    let matchComponents = this.state.matches.map((match, index) => (
      <Match firebase={this.props.firebase} matchId={index} match={match} userId={this.props.userId} />
    ));

    return (
      <Card.Group>
        { matchComponents }
      </Card.Group>
    )
  }

  componentDidMount = () => {
    getMatches(this.props.firebase, this.updateMatchesList);
  }

  // callback to update the state with the match list
  updateMatchesList = (snapshot) => {
    this.setState({matches: snapshot.val()});
  }
}
