 import firebase from 'firebase/app';
 import 'firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDJ0sujJrYKQvsuu840LM9CeXSrJTww8wA",
    authDomain: "alqueria-cbf15.firebaseapp.com",
    projectId: "alqueria-cbf15",
    storageBucket: "alqueria-cbf15.appspot.com",
    messagingSenderId: "437220930165",
    appId: "1:437220930165:web:deb8ef2f69a2f8949a3e3c"
  };
  // Initialize Firebase
 const firedb = firebase.initializeApp(firebaseConfig);

 export const db = firedb.firestore()
