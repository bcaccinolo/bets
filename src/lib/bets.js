import _ from 'lodash';

// Records a bet for a match in /bets/match/ID/user/userID/*
// Possible bet : '1', 'N' , '2'
export const betOnMatch = (firebase, matchId, userId, bet) => {
  const ref = 'bets/matches/' + matchId + '/user/' + userId;
  firebase.database().ref(ref).set({
    bet: bet
  });
}

// Sets a listener on the bets per match.
// When a bet is done, it triggers the update of /matches/ID/bets
export const listenMatchBetChanges = (firebase, matchId) => {
  const ref = 'bets/matches/' + matchId;
  firebase.database().ref(ref).on('value', () => {
    console.log('the value bets have changed');
    updateMatchBets(firebase, matchId);
  });
}

// Sets a listener on the bets per match.
// When a bet is done, it triggers the update of /matches/ID/bets and updates the Graph's state
export const listenMatchBetChangesForGraph = (firebase, matchId, graphSetState) => {
  const ref = '/matches/' + matchId + '/bets/';
  firebase.database().ref(ref).on('value', (snapshot) => {
    const values = _.values(snapshot.val());
    graphSetState({
      data:  [ { value: values[0] }, { value: values[1] }, { value: values[2] } ]
    });
  });
}

// Triggers the recalculation and update /match/ID/bets/
export const updateMatchBets = (firebase, matchId) => {
  countBet(firebase, matchId, (firebase, matchId, matchBets) => {
    const ref = '/matches/' + matchId + '/bets/';
    firebase.database().ref(ref).set(matchBets);
  })
}

// Recalculate the /matches/ID/bets data from /bets/match/ID/*
export const countBet = (firebase, matchId, updateCallback) => {
  const ref = 'bets/matches/' + matchId + '/user/';
  firebase.database().ref(ref).once('value', (snapshot) => {
    const rr = snapshot.val();
    const tt = _.mapValues(rr, (v) => v.bet)
    const res = _.values(tt)

    const matchBets = { '1': _.size(_.filter(res, (e) => e === "1")),
                        'N': _.size(_.filter(res, (e) => e === "N")),
                        '2': _.size(_.filter(res, (e) => e === "2")) };

    updateCallback(firebase, matchId, matchBets);
  })
}

// Listen for the change of a bet of a specific user on a specific match
// if the bet is not undefined, it updates the state
export const listenMatchUserBet = (firebase, matchId, userId, setState) => {
  const ref = 'bets/matches/' + matchId + '/user/' + userId + '/bet/';
  firebase.database().ref(ref).on('value', (snapshot) => {
    const bet = snapshot.val();
    if (bet !== undefined) {
      setState({ userBet: bet })
    }
  });
}