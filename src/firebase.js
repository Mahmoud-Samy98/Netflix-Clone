import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7ZQpSGLzo8phKWtlmoWE0w9Mnwr9XHLo",
  authDomain: "netflix-clone-fa950.firebaseapp.com",
  projectId: "netflix-clone-fa950",
  storageBucket: "netflix-clone-fa950.appspot.com",
  messagingSenderId: "453575972067",
  appId: "1:453575972067:web:97bf80d9195b5c632da1d6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
