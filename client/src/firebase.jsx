// Import the functions needed from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn_lxk84tFhQV1-kisdcNiTVhYEy8dfX8",
  authDomain: "react-podcast-eaca2.firebaseapp.com",
  projectId: "react-podcast-eaca2",
  storageBucket: "react-podcast-eaca2.appspot.com",
  messagingSenderId: "896175786891",
  appId: "1:896175786891:web:0206b1a36782e9be55fd8e",
  measurementId: "G-GLVSJ0ZJDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth9app;

export { auth, db, storage };