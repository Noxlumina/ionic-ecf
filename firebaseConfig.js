import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyD-bPV1FAdyOLTAkg2InnGZBGfWYUA04Ak",
  authDomain: "localib-864fa.firebaseapp.com",
  projectId: "localib-864fa",
  storageBucket: "localib-864fa.appspot.com",
  messagingSenderId: "817445296190",
  appId: "1:817445296190:web:ad63389683cb193378196f",
  measurementId: "G-F7RYWV7KTE",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const database = getFirestore();
