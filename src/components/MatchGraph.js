import React, { Component } from 'react';
import { PieChart, Pie, Legend, Cell } from 'recharts';
import { scaleOrdinal, schemeCategory10 } from 'd3-scale';

import { listenMatchBetChangesForGraph } from '../lib/bets';

const colors = scaleOrdinal(schemeCategory10).range();

export default class BaseComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:  [ { value: 4 }, { value: 3 }, { value: 3 } ]
    };
    console.log('MatchGrap props are ');
    console.log(this.props);
  }

  render = () => {
    const content = (
      <div>

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

      </div>
    );
    return content;
  }

  componentDidMount = () => {
    listenMatchBetChangesForGraph(this.props.firebase, this.props.matchId, this.setState.bind(this))
  }

}

