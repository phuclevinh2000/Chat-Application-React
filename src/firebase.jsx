import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZTP5hj9TfV197dRWsPSuTfBaevEv0GVk",
    authDomain: "whats-app-clone-19caf.firebaseapp.com",
    projectId: "whats-app-clone-19caf",
    storageBucket: "whats-app-clone-19caf.appspot.com",
    messagingSenderId: "560883122878",
    appId: "1:560883122878:web:bf6d39e715dd6f2feb54ef",
    measurementId: "G-XMSQBDR7HD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider}
  export default db;