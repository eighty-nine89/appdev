// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfKi3US-g-2b8L1j_1ffxu3-_dElmkZJM",
  authDomain: "appdev-11d97.firebaseapp.com",
  projectId: "appdev-11d97",
  storageBucket: "appdev-11d97.appspot.com",
  messagingSenderId: "130976145265",
  appId: "1:130976145265:web:5211af426a516e403f20d0",
  measurementId: "G-759TJYMMDQ"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);