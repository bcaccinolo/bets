import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

import Bet from './Bet';
import MatchGraph from './MatchGraph';

import { listenMatchBetChanges } from '../lib/bets';
import { dispScore } from '../lib/matches';

export default class BaseComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render = () => {
    const content = (
      <Card>
        <Card.Content>
        <h2 className='ui center aligned header'>{this.props.match.team1.name} - {this.props.match.team2.name}</h2>
        <h1 className='ui center aligned header'>
          {dispScore(this.props.match.score1)} - {dispScore(this.props.match.score2)}
        </h1>

        <MatchGraph firebase={this.props.firebase} matchId={this.props.matchId} />
        <Bet firebase={this.props.firebase} matchId={this.props.matchId} userId={this.props.userId} />
        </Card.Content>
      </Card>
    );
    return content;
  }

  componentDidMount = () => {
    listenMatchBetChanges(this.props.firebase, this.props.matchId);
  }

}

