import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9TRguZx8eHy9cCG9hjeW9vP4sgEpdlU8",
  authDomain: "react-todo-eb3bc.firebaseapp.com",
  projectId: "react-todo-eb3bc",
  storageBucket: "react-todo-eb3bc.appspot.com",
  messagingSenderId: "140402178062",
  appId: "1:140402178062:web:5b4676a2d984fe1487645f",
  measurementId: "G-5Z4ELHDDLF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
