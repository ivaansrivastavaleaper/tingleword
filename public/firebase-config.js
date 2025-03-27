// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration (New Project)
const firebaseConfig = {
  apiKey: "AIzaSyDoxcUcW3oVcQFAWvhmWh_pTuugr9rF0DQ",
  authDomain: "leaperstuff.firebaseapp.com",
  databaseURL: "https://leaperstuff-default-rtdb.firebaseio.com",
  projectId: "leaperstuff",
  storageBucket: "leaperstuff.appspot.com",  // Corrected domain
  messagingSenderId: "924724287800",
  appId: "1:924724287800:web:7c7fcd60a69ae13541c9cd",
  measurementId: "G-1H7328L9VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

// Export Firebase modules
export { app, auth, provider, analytics };