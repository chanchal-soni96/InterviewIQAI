import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-45bfb.firebaseapp.com",
  projectId: "interviewiq-45bfb",
  storageBucket: "interviewiq-45bfb.firebasestorage.app",
  messagingSenderId: "43793533431",
  appId: "1:43793533431:web:c39ac0944bda3523b346f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth, provider}