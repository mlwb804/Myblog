// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/firestore";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAfYtYOzRQSMmcc30DgmGTA0ybn4C1Mojs",
    authDomain: "myblog-80c7e.firebaseapp.com",
    databaseURL: "https://myblog-80c7e.firebaseio.com",
    projectId: "myblog-80c7e",
    storageBucket: "myblog-80c7e.appspot.com",
    messagingSenderId: "441604310208",
    appId: "1:441604310208:web:6f92bc977bb071c4461925",
    measurementId: "G-R72R3GT4HL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export { db }