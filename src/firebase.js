// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAriBN5XHMjOTXu9fDElfFRSRzxJERVrzo",
  authDomain: "workshop-link-tree.firebaseapp.com",
  projectId: "workshop-link-tree",
  storageBucket: "workshop-link-tree.appspot.com",
  messagingSenderId: "985169386422",
  appId: "1:985169386422:web:5dfa40983faa6910ff3f17",
  databaseURL: "https://workshop-link-tree-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;