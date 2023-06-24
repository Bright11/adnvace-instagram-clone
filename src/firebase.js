// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDItzrw4R3qYOZIibtrk4yRyCPXO8-yFzI",
  authDomain: "adinstagramapp-45d04.firebaseapp.com",
  projectId: "adinstagramapp-45d04",
  storageBucket: "adinstagramapp-45d04.appspot.com",
  messagingSenderId: "511088232452",
  appId: "1:511088232452:web:f71d68173b4b8cc0154d51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, storage, db };