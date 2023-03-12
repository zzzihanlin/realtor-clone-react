// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFfxlnS7SU14aHpe3cHkUxBnNZstfRlc0",
  authDomain: "realtor-clone-react-5e798.firebaseapp.com",
  projectId: "realtor-clone-react-5e798",
  storageBucket: "realtor-clone-react-5e798.appspot.com",
  messagingSenderId: "727819572661",
  appId: "1:727819572661:web:200ce25ddcd6a08b2075fc"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()