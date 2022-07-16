
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD3gOjMbnixetge1kdMesULxA2ohOhSYcI",
  authDomain: "pizzeriaayala.firebaseapp.com",
  projectId: "pizzeriaayala",
  storageBucket: "pizzeriaayala.appspot.com",
  messagingSenderId: "265646599072",
  appId: "1:265646599072:web:b39cdad96abf6902ab12c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)