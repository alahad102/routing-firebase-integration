// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbI3mJitSUWHH7BOd9KBz5RwqjjZUmjws",
  authDomain: "routing-firebase-integration.firebaseapp.com",
  projectId: "routing-firebase-integration",
  storageBucket: "routing-firebase-integration.appspot.com",
  messagingSenderId: "862793491524",
  appId: "1:862793491524:web:0a2c29e20ac92dcb78c811"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;