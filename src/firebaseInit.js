// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs7UCH_JHrsaVb3bVgk7MiVtc9VFUUabs",
  authDomain: "fir-c1079.firebaseapp.com",
  projectId: "fir-c1079",
  storageBucket: "fir-c1079.appspot.com",
  messagingSenderId: "873674428150",
  appId: "1:873674428150:web:d55c9c01367e340a82a6d7",
  measurementId: "G-M82WY6H68H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);