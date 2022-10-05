import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyDPcFBM2j_IqHxpReaEmyJsufy0j189G3E",
  authDomain: "nosql-folders.firebaseapp.com",
  databaseURL:
    "https://nosql-folders-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nosql-folders",
  storageBucket: "nosql-folders.appspot.com",
  messagingSenderId: "370984351664",
  appId: "1:370984351664:web:e4b12f51bd4eb99f024875",
  measurementId: "G-040CQ7PLVG",
});

const db = firebase.firestore();

export default {
  firebase,
  db,
};
