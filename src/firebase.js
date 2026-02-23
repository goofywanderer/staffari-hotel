// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdT3WW4QzEbNdhEB_4_XL1lhIm02F3Nvs",
  authDomain: "hhs-updated.firebaseapp.com",
  projectId: "hhs-updated",
  storageBucket: "hhs-updated.firebasestorage.app",
  messagingSenderId: "427026131728",
  appId: "1:427026131728:web:9f4dd83d389f529c7bd395",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
