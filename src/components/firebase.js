// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUhx44FpUy_VNssbKnIxo05QBF3kAtrFg",
  authDomain: "login-fe58f.firebaseapp.com",
  projectId: "login-fe58f",
  storageBucket: "login-fe58f.firebasestorage.app",
  messagingSenderId: "390092052069",
  appId: "1:390092052069:web:340e64a84f0545b758588c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;