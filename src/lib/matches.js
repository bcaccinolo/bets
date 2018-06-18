
// Retrieves matches
//  callback function will be used to update the matches list
//  callback(snapshot)
export const getMatches = (firebase, callback) => {
  firebase.database().ref('matches').once('value', callback);
}

// If score is null, it returns '?'
export const dispScore = (score) => {
  if (score === undefined) {
    return '?';
  }
  return score;
}