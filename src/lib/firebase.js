import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-a4747.firebaseapp.com",
  projectId: "reactchat-a4747",
  storageBucket: "reactchat-a4747.appspot.com",
  messagingSenderId: "851596013112",
  appId: "1:851596013112:web:ca1e6198fd27fd134400cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

export const storage = getStorage();
