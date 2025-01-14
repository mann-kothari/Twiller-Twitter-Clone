import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqTxEVGJmMYlyxqfVGjqaUsm91LlksXfk",
  authDomain: "twiller-394a4.firebaseapp.com",
  projectId: "twiller-394a4",
  storageBucket: "twiller-394a4.firebasestorage.app",
  messagingSenderId: "405679386487",
  appId: "1:405679386487:web:bea150c466d86ed082fb72",
  measurementId: "G-YDNV5EH2KQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);

// Export the app instance
export default app;
