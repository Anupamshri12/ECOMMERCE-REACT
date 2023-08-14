// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAin1hl4hepzMOpNJIErVkjRlPPoycPdB0",
  authDomain: "e-mail-auth-82c7d.firebaseapp.com",
  projectId: "e-mail-auth-82c7d",
  storageBucket: "e-mail-auth-82c7d.appspot.com",
  messagingSenderId: "115360809536",
  appId: "1:115360809536:web:7374a227ba4151b9f015a5",
  measurementId: "G-62WWDP89G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;