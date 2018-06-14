export const writeUserData = (firebase, userId, name, email, imageUrl) => {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
}


// updateUserState(snapshot) : will update the state
export const readUserData = (firebase, userId, updateUserState) => {
  firebase.database().ref('users/' + userId).once('value').then(updateUserState)
}


// Authenticates the user and calls the 'udpateCallback' function.
export const authenticateUser = (firebase, updateCallback) => {
  firebase.auth().signInAnonymously();
  firebase.auth().onAuthStateChanged((user) => {
      if (user === undefined) {
        console.log("Authentication error");
      }
      // User is signed in.
      readUserData(firebase, user.uid, updateCallback);
  })
}
