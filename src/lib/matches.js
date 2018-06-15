

// Retrieves matches
//  callback function will be used to update the matches list
//  callback(snapshot)
export const getMatches = (firebase, callback) => {
  firebase.database().ref('matches').once('value', callback);
}

// Records a bet for a match
// bet : '1', 'N' , '2'
export const betOnMatch = (firebase, matchId, userId, bet) => {
  console.log('betOnMatch');
  const ref = 'bets/matches/' + matchId + '/user/' + userId;
  console.log('the ref is ' + ref);

  firebase.database().ref(ref).set({
    bet: bet
  });
}