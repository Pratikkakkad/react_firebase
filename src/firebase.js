import firebase from "firebase";

var config = {
  apiKey: "AIzaSyBPhGPJ9RYXyuwdwXgEoUHic7YRQ4BiB8M",
  authDomain: "first-flight-with-friend-d139a.firebaseapp.com",
  databaseURL: "https://first-flight-with-friend-d139a.firebaseio.com",
  projectId: "first-flight-with-friend-d139a",
  storageBucket: "first-flight-with-friend-d139a.appspot.com",
  messagingSenderId: "717025821494",
  appId: "1:717025821494:web:c2cdea657e41d2c5432997"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.database().goOnline();
export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;
