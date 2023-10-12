// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCtZ5zA8B_MaZ0RAjF1fyFCpaZoq_GKZsc",
  authDomain: "netflixgpt-eaae1.firebaseapp.com",
  projectId: "netflixgpt-eaae1",
  storageBucket: "netflixgpt-eaae1.appspot.com",
  messagingSenderId: "572475643147",
  appId: "1:572475643147:web:208b37dac8715ad7eabe0e",
  measurementId: "G-M48NKL9DFQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
