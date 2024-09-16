// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfjYfaclT4BCV40QHt9x7L7JVveOsCIWw",
  authDomain: "biofieldpowerdev.firebaseapp.com",
  projectId: "biofieldpowerdev",
  storageBucket: "biofieldpowerdev.appspot.com",
  messagingSenderId: "656515635268",
  appId: "1:656515635268:web:bf6c8e8b490f6b44b2c411",
  // measurementId: "G-JQH6T2EKQK",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig): getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();

export { auth, db, storage };