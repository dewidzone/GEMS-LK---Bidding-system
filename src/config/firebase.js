import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyBj1eeQ42fIvR6NqNI-TRUgx4xSCInwtD0",
  authDomain: "gemslk.firebaseapp.com",
  projectId: "gemslk",
  storageBucket: "gemslk.appspot.com",
  messagingSenderId: "576783541990",
  appId: "1:576783541990:web:2c84bafa2935d71f543d27"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
