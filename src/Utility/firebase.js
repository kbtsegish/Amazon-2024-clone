import firebase from "firebase/compat/app"; // Default import for Firebase compat mode
import { getAuth } from "firebase/auth"; // Import Firebase v9 auth
import "firebase/compat/firestore"; // Import Firestore compat
import "firebase/compat/auth"; // Import Auth compat

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA5eiLicBTKN6gKTRpoIzO8ZGNewPF-SE",
  authDomain: "clone-23ead.firebaseapp.com",
  projectId: "clone-23ead",
  storageBucket: "clone-23ead.appspot.com",
  messagingSenderId: "572414913555",
  appId: "1:572414913555:web:ce29b042c34187405523e6",
  measurementId: "G-X21FSBCD7W",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig); 
// Use compat mode to initialize Firebase
export const auth = getAuth(app); // Firebase v9 API
export const db = firebase.firestore(); // Use compat mode Firestore
