// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHLIauMuPoOdfouH6ldt0WfPxZjc9Qc3k",
  authDomain: "movieflixgpt-2ea24.firebaseapp.com",
  projectId: "movieflixgpt-2ea24",
  storageBucket: "movieflixgpt-2ea24.appspot.com",
  messagingSenderId: "920124731874",
  appId: "1:920124731874:web:3134021f6f1daf480209bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();