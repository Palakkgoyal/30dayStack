import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

const app = firebase.initializeApp( {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "daystask-8f44b.firebaseapp.com",
  projectId: "daystask-8f44b",
  storageBucket: "daystask-8f44b.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
});


// Initialize Firebase
const db = app.firestore();
const auth = firebase.auth();
const auth2 = getAuth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { app, auth, db, googleAuthProvider, storage, auth2 };