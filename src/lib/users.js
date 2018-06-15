

// authenticates the user and calls the 'udpateCallback' function.
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

// updateUserState(snapshot) : will update the state with user data from Firebase
export const readUserData = (firebase, userId, updateUserState) => {
  firebase.database().ref('users/' + userId).once('value').then(updateUserState)
}

// updates the user data in Firebase from the data given
export const updateUserName = (firebase, uid, name) => {
  firebase.database().ref('users/' + uid).set({
    name: name
  });
}
