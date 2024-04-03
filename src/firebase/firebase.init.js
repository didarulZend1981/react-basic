// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfzBA5KaOobZbkO3UFL92Fg-rZiVojv2E",
  authDomain: "react-basic-133d6.firebaseapp.com",
  projectId: "react-basic-133d6",
  storageBucket: "react-basic-133d6.appspot.com",
  messagingSenderId: "313832659111",
  appId: "1:313832659111:web:609715bb63687cd3dba382"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
