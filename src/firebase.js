import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB7R2vRc-JngGT9GFu2wtAB6UW8aVyjaAk",
    authDomain: "user-auth-7ff5b.firebaseapp.com",
    projectId: "user-auth-7ff5b",
    storageBucket: "user-auth-7ff5b.appspot.com",
    messagingSenderId: "898316125060",
    appId: "1:898316125060:web:4b5f5e06dbec50869593d1"
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db=getAuth(app)
  export { auth };