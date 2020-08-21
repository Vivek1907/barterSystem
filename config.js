import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCKJZGY0zXUYFXyH9fKnVIu8IvoBzcVCuw",
    authDomain: "bartersystem-1db62.firebaseapp.com",
    databaseURL: "https://bartersystem-1db62.firebaseio.com",
    projectId: "bartersystem-1db62",
    storageBucket: "bartersystem-1db62.appspot.com",
    messagingSenderId: "338027929675",
    appId: "1:338027929675:web:220373c398e27f95d7edce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;