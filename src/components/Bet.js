import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

import { betOnMatch } from '../lib/bets';

export default class BaseComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    console.log('Bet props ');
    console.log(this.props);
  }

  render = () => {
    const content = (
      <div>
        Bet Block
        <Button color='teal' fluid size='large' onClick={this.submitWinFirst}>1</Button>
        <Button color='teal' fluid size='large' onClick={this.submitEquality}>N</Button>
        <Button color='teal' fluid size='large' onClick={this.submitWinSecond}>2</Button>
      </div>
    );
    return content;
  }

  componentDidMount = () => { }

  submitWinFirst = () => {
    betOnMatch(this.props.firebase, this.props.matchId, this.props.userId, '1');
  }

  submitEquality = () => {
    betOnMatch(this.props.firebase, this.props.matchId, this.props.userId, 'N');
  }

  submitWinSecond = () => {
    betOnMatch(this.props.firebase, this.props.matchId, this.props.userId, '2');
  }

}

