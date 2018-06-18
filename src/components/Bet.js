import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

import { betOnMatch } from '../lib/bets';

export default class BaseComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    console.log('Bet props ');
    console.log(this.props);

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

  componentDidMount = () => {
   }

  submitWinFirst = () => {
    console.log('submit 1');
    betOnMatch(this.props.firebase, this.props.matchId, this.props.userId, '1');
  }

  submitEquality = () => {
    console.log('submit N');
    betOnMatch(this.props.firebase, this.props.matchId, this.props.userId, 'N');
  }

  submitWinSecond = () => {
    console.log('submit 2');
    betOnMatch(this.props.firebase, this.props.matchId, this.props.userId, '2');
  }

}

