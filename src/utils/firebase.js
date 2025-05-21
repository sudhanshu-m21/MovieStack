// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "moviestack-39b64.firebaseapp.com",
  projectId: "moviestack-39b64",
  storageBucket: "moviestack-39b64.firebasestorage.app",
  messagingSenderId: "1094901016910",
  appId: "1:1094901016910:web:abd034b57c86ed5c24161f",
  measurementId: "G-CKV10ZBFFJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
