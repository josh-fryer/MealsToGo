import { initializeApp } from "firebase/app";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB9CMqwGgvvQDwip6JuA6VSBvFV7Pcg0gw",
  authDomain: "mealstogo-23cda.firebaseapp.com",
  projectId: "mealstogo-23cda",
  storageBucket: "mealstogo-23cda.appspot.com",
  messagingSenderId: "874854139932",
  appId: "1:874854139932:web:e094b2f946fb2dc23cb7d9",
};

export const myFirebase = initializeApp(firebaseConfig);
