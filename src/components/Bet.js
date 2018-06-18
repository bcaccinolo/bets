import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

import { betOnMatch, listenMatchUserBet } from '../lib/bets';

export default class BaseComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userBet: undefined
    };

    console.log('Bet props ');
    console.log(this.props);
  }

  render = () => {
    let selected1 = '';
    if (this.state.userBet === '1') { selected1 = 'selected'; }
    let selectedN = '';
    if (this.state.userBet === 'N') { selectedN = 'selected'; }
    let selected2 = '';
    if (this.state.userBet === '2') { selected2 = 'selected'; }

    const content = (
      <div className='buttons'>
        <Button className={selected1} color='teal' size='large' onClick={this.submitWinFirst}>1</Button>
        <Button className={selectedN} color='yellow' size='large' onClick={this.submitEquality}>N</Button>
        <Button className={selected2} color='olive' size='large' onClick={this.submitWinSecond}>2</Button>
      </div> );
    return content;
  }

  componentDidMount = () => {
    listenMatchUserBet(this.props.firebase, this.props.matchId, this.props.userId, this.setState.bind(this));
   }

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

