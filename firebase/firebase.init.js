// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0Kc9AF26xoxYvDdXTFGAMqMF3Y4EErvk",
  authDomain: "online-marketplace-70c71.firebaseapp.com",
  projectId: "online-marketplace-70c71",
  storageBucket: "online-marketplace-70c71.appspot.com",
  messagingSenderId: "763054936275",
  appId: "1:763054936275:web:4e45ed1b931132f9638426"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
