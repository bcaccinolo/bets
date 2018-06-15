import React, { Component } from 'react';
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
    console.log('Matches props');
    console.log(this.props);

    let matchComponents = this.state.matches.map((match, index) => {
      return (
        <li key={index}>
          <Match firebase={this.props.firebase} matchId={index} match={match} userId={this.props.userId} />
        </li>
      )
    });


    const content = (
      <div>
        la liste des matchs:
        { matchComponents }
      </div>
    );
    return content;
  }

  componentDidMount = () => {
    getMatches(this.props.firebase, this.updateMatchesList);
  }

  // callback to update the state with the match list
  updateMatchesList = (snapshot) => {
    this.setState({matches: snapshot.val()});
  }

}

