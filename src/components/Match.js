import React, { Component } from 'react';
import Bet from './Bet';

export default class BaseComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    console.log('Match props');
    console.log(this.props);

    const content = (
      <div>
        <h2>{this.props.match.team1.name}</h2>
        <h2>{this.props.match.team2.name}</h2>
        <Bet firebase={this.props.firebase} matchId={this.props.matchId} userId={this.props.userId} />
      </div>
    );
    return content;
  }

  componentDidMount = () => {
  }

}

