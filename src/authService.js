// src/authService.js
import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

// HOTEL SIGNUP
export const hotelSignup = async ({ fullName, email, password, phone }) => {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  const user = cred.user;

  await setDoc(doc(db, "hhs_app", "users", "Hotel", user.uid), {
    uid: user.uid,
    fullName,
    email,
    phone,
    role: "Hotel",
    createdAt: new Date(),
    isEmailVerified: false,
    isPhoneVerified: false,
    isAadhaarVerified: false,
  });

  return user;
};

// HOTEL LOGIN
export const hotelLogin = async (email, password) => {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  const user = cred.user;

  const ref = doc(db, "hhs_app", "users", "Hotel", user.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    throw new Error("Not a Hotel account");
  }

  return snap.data();
};
