// // firebaseConfig.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCWSKp33pLaSazxexXaPPtdXwPme7QJpiM",
//   authDomain: "limm-3bb04.firebaseapp.com",
//   projectId: "limm-3bb04",
//   storageBucket: "limm-3bb04.firebasestorage.app",
//   messagingSenderId: "688127704109",
//   appId: "1:688127704109:web:6372fc375fc673f7b6cca4",
//   measurementId: "G-EN0TT53VGY",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);

// export default app;

// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
// };

// const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);
// export const db = getFirestore(app);


// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, // Add authDomain
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID, // Add messagingSenderId
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID, // Add appId
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID, // Add measurementId (if available)
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Initialize and export auth
export const storage = getStorage(app);
export const db = getFirestore(app);
