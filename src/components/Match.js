import React, { Component } from 'react';

import Bet from './Bet';
import MatchGraph from './MatchGraph';
import { listenMatchBetChanges, setMatchUserBet, listenMatchUserBet} from '../lib/bets';

export default class BaseComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userBet: undefined
    };
  }

  render = () => {
    const content = (
      <div>
        <h2>{this.props.match.team1.name}</h2>
        <h2>{this.props.match.team2.name}</h2>

        <div>Your current bet is {this.state.userBet}</div>

        <MatchGraph firebase={this.props.firebase} matchId={this.props.matchId} />
        <Bet firebase={this.props.firebase} matchId={this.props.matchId} userId={this.props.userId} />
      </div>
    );
    return content;
  }

  componentDidMount = () => {
    listenMatchBetChanges(this.props.firebase, this.props.matchId);
    listenMatchUserBet(this.props.firebase, this.props.matchId, this.props.userId, this.setState.bind(this))
  }

}

