import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwwZcwNt3wwvU-HgyainHUas5b-KKay3s",
  authDomain: "resumebuildergoit.firebaseapp.com",
  databaseURL: "https://resumebuildergoit.firebaseio.com",
  projectId: "resumebuildergoit",
  storageBucket: "resumebuildergoit.appspot.com",
  messagingSenderId: "379391336484",
  appId: "1:379391336484:web:b91fbd4c71a45e6e68f8b1",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
