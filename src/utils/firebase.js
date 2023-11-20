// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-8fca1.firebaseapp.com",
  projectId: "netflixgpt-8fca1",
  storageBucket: "netflixgpt-8fca1.appspot.com",
  messagingSenderId: "165994502688",
  appId: "1:165994502688:web:e2b22dbb00d2ed2a59fa45",
  measurementId: "G-S97RVRPNCY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
