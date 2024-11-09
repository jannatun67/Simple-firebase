// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtVzL7gytx7D3XZ9pF_vL-ikVZUWd2Sfg",
  authDomain: "simple-firebase2-16cd0.firebaseapp.com",
  projectId: "simple-firebase2-16cd0",
  storageBucket: "simple-firebase2-16cd0.firebasestorage.app",
  messagingSenderId: "754188951350",
  appId: "1:754188951350:web:cb8f9873ebd1182dd8dd97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
 
