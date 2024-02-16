import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDF7uJWNtisEX5V0kAPasHYNWLgJFYp2Dc",
  authDomain: "friendlychat-2726f.firebaseapp.com",
  projectId: "friendlychat-2726f",
  storageBucket: "friendlychat-2726f.appspot.com",
  messagingSenderId: "85508894645",
  appId: "1:85508894645:web:a719c5ca2e413489f173fc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
