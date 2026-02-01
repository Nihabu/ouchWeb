import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXxGOLkd5tKq0fb1O-KN52ntG8d9COXuo",
  authDomain: "ouchweb-4b068.firebaseapp.com",
  projectId: "ouchweb-4b068",
  storageBucket: "ouchweb-4b068.firebasestorage.app",
  messagingSenderId: "213015895299",
  appId: "1:213015895299:web:18e5dadab63d6dcd88dd36",
  measurementId: "G-YZGCWM91LJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

