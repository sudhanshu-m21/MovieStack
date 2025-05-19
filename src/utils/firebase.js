// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "netflixgpt-d15c8",
  storageBucket: "netflixgpt-d15c8.appspot.com",
  messagingSenderId: "846014100445",
  appId: "1:846014100445:web:afe95ab6b8f6043d617c34",
  measurementId: "G-DCDWJN3R5N",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
