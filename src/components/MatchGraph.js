import React, { Component } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import _ from 'lodash';

import { listenMatchBetChangesForGraph } from '../lib/bets';

export default class BaseComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:  [ { value: 0 }, { value: 0 }, { value: 0 } ]
    };
    console.log('MatchGrap props are ');
    console.log(this.props);
  }

  // Returns true if the is at leat one bet stored in the state
  atLeatOneBet = () => {
    return _.reduce(this.state.data, (sum, e) => { return sum + e.value; }, 0) > 0
  }

  render = () => {
    if (this.atLeatOneBet()) {
      return <Graph data={this.state.data} />
    } else {
      return <NoGraph />
    }
  }

  componentDidMount = () => {
    listenMatchBetChangesForGraph(this.props.firebase, this.props.matchId, this.setState.bind(this))
  }
}

function Graph(props) {
  const colors = ['#009c95', '#b5cc18', '#fbbd08'];

  return (
    <div>
      <PieChart width={200} height={200}>
        <Pie
          data={props.data}
          dataKey="value"
          cx={100}
          cy={70}
          startAngle={180}
          endAngle={-180}
          innerRadius={30}
          outerRadius={70}
          paddingAngle={1}
          isAnimationActive={true}
        >
          {
            props.data.map((entry, index) => (
              <Cell key={`slice-${index}`} fill={colors[index % 10]}/>
            ))
          }
        </Pie>
      </PieChart>
    </div>
  );
}

function NoGraph(props) {
  const data = [ { value: 1 }, { value: 1 }, { value: 1 } ];
  const colors = ['#aaa', '#aaa', '#aaa'];

  return (
    <div>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          dataKey="value"
          cx={100}
          cy={70}
          startAngle={180}
          endAngle={-180}
          innerRadius={30}
          outerRadius={70}
          paddingAngle={1}
          isAnimationActive={true}
        >
          {
            data.map((entry, index) => (
              <Cell key={`slice-${index}`} fill={colors[index % 10]}/>
            ))
          }
        </Pie>
      </PieChart>
    </div>
  );
}
