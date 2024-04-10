import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD3E4RgOIwZ-PIX4tEFVap_j8t_54gVgHM",
    authDomain: "non-profit-app-5ea14.firebaseapp.com",
    projectId: "non-profit-app-5ea14",
    storageBucket: "non-profit-app-5ea14.appspot.com",
    messagingSenderId: "1093733194501",
    appId: "1:1093733194501:web:15a71dbd26a80afd2e756c",
    measurementId: "G-R2Y59T798Z"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export { auth }

export default firebase;

//   const app = initializeApp(firebaseConfig);

//   // Initialize Firebase Authentication and get a reference to the service
//   const auth = getAuth();

//   // Sign up new users
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed up 
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
  
//   // Sign in existing users
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
  
//   // Set an authentication state observer and get user data
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/auth.user
//       const uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });