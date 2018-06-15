// Firebase App is always required and must be first
import firebase from 'firebase/app'

// Add additional services you want to use
import 'firebase/auth';
import 'firebase/database';

var config = {
  apiKey: "AIzaSyDmo-ECmcMwecFksUzbCQ-0oQVKadkbNoM",
  authDomain: "coupedumonde-32a94.firebaseapp.com",
  databaseURL: "https://coupedumonde-32a94.firebaseio.com",
  projectId: "coupedumonde-32a94",
  storageBucket: "",
  messagingSenderId: "816063014936"
};

firebase.initializeApp(config);
export default firebase;