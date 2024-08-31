// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-14gXyFvdAml_xfOtSlRfYdc1ocUz7Og",
  authDomain: "notes-663a0.firebaseapp.com",
  projectId: "notes-663a0",
  storageBucket: "notes-663a0.appspot.com",
  messagingSenderId: "805636065066",
  appId: "1:805636065066:web:c49049b927f19c03bec053",
  measurementId: "G-DLNH785QQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes")
