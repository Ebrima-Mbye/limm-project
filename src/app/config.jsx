// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBw37BsB7K1zdmGPn5BWgrK8ddfrGPHAyM",
  authDomain: "limm-website-a5343.firebaseapp.com",
  projectId: "limm-website-a5343",
  storageBucket: "limm-website-a5343.firebasestorage.app",
  messagingSenderId: "29930761438",
  appId: "1:29930761438:web:1609b5f1177f062d05e64f",
  measurementId: "G-CME22B3DMQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics =
  app.name && typeof window !== "underdefined" ? app.analytics() : null;
const db = getFirestore(app);

export { app, analytics, auth, db }; // Export the storage object for use in other parts of your app.
