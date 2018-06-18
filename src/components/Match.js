import React, { Component } from 'react';
import Bet from './Bet';
import { listenMatchBetChanges } from '../lib/bets';

import { PieChart, Pie, Legend, Cell } from 'recharts';
import { scaleOrdinal, schemeCategory10 } from 'd3-scale';

const colors = scaleOrdinal(schemeCategory10).range();

export default class BaseComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:  [ { value: 4 }, { value: 3 }, { value: 3 } ]
    };
  }

  render = () => {
    console.log('Match props');
    console.log(this.props);

    const content = (
      <div>
        <h2>{this.props.match.team1.name}</h2>
        <h2>{this.props.match.team2.name}</h2>

          <PieChart width={200} height={200}>
            <Legend />
            <Pie
              data={this.state.data}
              dataKey="value"
              cx={100}
              cy={70}
              startAngle={180}
              endAngle={-180}
              innerRadius={30}
              outerRadius={70}
              paddingAngle={1}
              isAnimationActive={this.state.animation}
            >
              {
                this.state.data.map((entry, index) => (
                  <Cell key={`slice-${index}`} fill={colors[index % 10]}/>
                ))
              }
            </Pie>
          </PieChart>


        <Bet firebase={this.props.firebase} matchId={this.props.matchId} userId={this.props.userId} />
      </div>
    );
    return content;
  }

  componentDidMount = () => {
    listenMatchBetChanges(this.props.firebase, this.props.matchId);
  }

}

