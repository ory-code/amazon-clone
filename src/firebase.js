// import firebase from "firebase";


// const firebaseConfig = {
//     apiKey: "AIzaSyD9vSY59zs9hJ2xVwbxdxo_XZf7y8Ij02s",
//     authDomain: "amz-sacha.firebaseapp.com",
//     projectId: "amz-sacha",
//     storageBucket: "amz-sacha.appspot.com",
//     messagingSenderId: "820553283691",
//     appId: "1:820553283691:web:2bdc063fe187473264d92e"
//   };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9vSY59zs9hJ2xVwbxdxo_XZf7y8Ij02s",
  authDomain: "amz-sacha.firebaseapp.com",
  projectId: "amz-sacha",
  storageBucket: "amz-sacha.appspot.com",
  messagingSenderId: "820553283691",
  appId: "1:820553283691:web:2bdc063fe187473264d92e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);