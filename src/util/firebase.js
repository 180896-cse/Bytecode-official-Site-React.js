import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBmiI6zkEbdgbEQptGsmKRICTrPjYG63oo",
  authDomain: "bytecode-todo.firebaseapp.com",
  projectId: "bytecode-todo",
  storageBucket: "bytecode-todo.appspot.com",
  messagingSenderId: "624907583851",
  appId: "1:624907583851:web:4493ec5093a1b857ab4c2e",
  measurementId: "G-D14WJ96Q26"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
