import firebase from './firebase/Firebase';
import "bootstrap/dist/css/bootstrap.min.css";
var firebaseConfig = {
    apiKey: "AIzaSyAlR3IwzSC6lC81xAm00Cy0WgXd3Vt16Ng",
    authDomain: "crud-firebase-alqueria.firebaseapp.com",
    databaseURL: "https://crud-firebase-alqueria-default-rtdb.firebaseio.com",
    projectId: "crud-firebase-alqueria",
    storageBucket: "crud-firebase-alqueria.appspot.com",
    messagingSenderId: "568733091842",
    appId: "1:568733091842:web:3ff3e6f81a8066f5f23f1b"
  };
  // Initialize Firebase
  var fireD8=firebase.initializeApp(firebaseConfig);

  export default fireD8.database().ref();
