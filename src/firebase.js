// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC8klHm6HXiGzoHovLIL93tHt9jcB54voA",
  authDomain: "bgopc-chat.firebaseapp.com",
  projectId: "bgopc-chat",
  storageBucket: "bgopc-chat.appspot.com",
  messagingSenderId: "437515120586",
  appId: "1:437515120586:web:38d9cdb34e92d9465b6933",
  measurementId: "G-E172FDW3ZT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();