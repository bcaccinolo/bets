// Firebase App is always required and must be first
// var firebase = require("firebase/app");
import firebase from 'firebase/app'

// Add additional services you want to use
require("firebase/auth");
require("firebase/database");

// Comment out (or don't require) services you don't want to use
// require("firebase/storage");
var config = {
  apiKey: "AIzaSyDmo-ECmcMwecFksUzbCQ-0oQVKadkbNoM",
  authDomain: "coupedumonde-32a94.firebaseapp.com",
  databaseURL: "https://coupedumonde-32a94.firebaseio.com",
  projectId: "coupedumonde-32a94",
  storageBucket: "",
  messagingSenderId: "816063014936"
};

firebase.initializeApp(config);
let defaultDatabase = firebase.database();


export default firebase;