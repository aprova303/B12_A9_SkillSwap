// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg5jdM0us6KfQCOuRz3hyXgCCOIQoxUCw",
  authDomain: "skillswap-a9.firebaseapp.com",
  projectId: "skillswap-a9",
  storageBucket: "skillswap-a9.firebasestorage.app",
  messagingSenderId: "975138953425",
  appId: "1:975138953425:web:110febc8a872c4a4d4cdf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;