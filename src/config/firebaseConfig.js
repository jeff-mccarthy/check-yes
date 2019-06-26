import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDEzDPCSCq5VBKbWnS2NXaXtTrCS62IWw4",
  authDomain: "check-yes.firebaseapp.com",
  databaseURL: "https://check-yes.firebaseio.com",
  projectId: "check-yes",
  storageBucket: "",
  messagingSenderId: "371254666337",
  appId: "1:371254666337:web:9be4c7c2fb15ede6"
};

// init firestore 
firebase.initializeApp(config);
firebase.firestore();

export default firebase;