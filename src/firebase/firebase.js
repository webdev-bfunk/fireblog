// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcVxIa7MpvNS-4TyOA3EcLYG15vk6PmEQ", //should be in .env
  authDomain: "firestore-b5299.firebaseapp.com",
  projectId: "firestore-b5299",
  storageBucket: "firestore-b5299.appspot.com",
  messagingSenderId: "865124127558",
  appId: "1:865124127558:web:ed6ee00958909e1f1b8b47",
  measurementId: "G-Z9H9HFXYWM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);