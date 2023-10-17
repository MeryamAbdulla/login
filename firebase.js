// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMr9klc4VZP-kQl0CBmdNx3OtCFlUze_Y",
  authDomain: "login-89d5a.firebaseapp.com",
  projectId: "login-89d5a",
  storageBucket: "login-89d5a.appspot.com",
  messagingSenderId: "1033415502507",
  appId: "1:1033415502507:web:16b80851df1eca97c065ee",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
export { auth };
