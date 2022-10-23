// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzMfBwPtmg0GqvGlB-Lui0qxtcyvm8ZMY",
  authDomain: "travel-edge.firebaseapp.com",
  projectId: "travel-edge",
  storageBucket: "travel-edge.appspot.com",
  messagingSenderId: "505063768898",
  appId: "1:505063768898:web:5808762e0ac480f5f03edb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;