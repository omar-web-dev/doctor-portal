// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJtgl-PAAmjdGfGoZUK2ZIA5StfMLL_QI",
  authDomain: "doctor-portal-c5028.firebaseapp.com",
  projectId: "doctor-portal-c5028",
  storageBucket: "doctor-portal-c5028.appspot.com",
  messagingSenderId: "628846536293",
  appId: "1:628846536293:web:40b26e271b7ea3c730c88c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app