// Import Firebase modules from CDN (for browser)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoyrMwrhbVRYO1DbvzdPZ1r_24J6ZmR2s",
  authDomain: "tingleword.firebaseapp.com",
  projectId: "tingleword",
  storageBucket: "tingleword.firebasestorage.app",
  messagingSenderId: "61299705070",
  appId: "1:61299705070:web:8df158d56514b65fcedfff",
  measurementId: "G-2HRBW93Q68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google Sign-in Function
export function googleSignIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("User signed in:", result.user);
      alert(`Welcome, ${result.user.displayName}`);
    })
    .catch((error) => {
      console.error("Sign-in error:", error);
    });
}

// Google Sign-out Function
export function googleSignOut() {
  signOut(auth)
    .then(() => {
      console.log("User signed out");
      alert("You have signed out.");
    })
    .catch((error) => {
      console.error("Sign-out error:", error);
    });
}
