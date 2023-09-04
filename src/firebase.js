// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDHcfl9K4SQGpc4cAwSUYoDKs94aw6wCI",
  authDomain: "react-blog-umar.firebaseapp.com",
  projectId: "react-blog-umar",
  storageBucket: "react-blog-umar.appspot.com",
  messagingSenderId: "802880857500",
  appId: "1:802880857500:web:60cefc55d47f99294c9459"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {db , storage, auth}