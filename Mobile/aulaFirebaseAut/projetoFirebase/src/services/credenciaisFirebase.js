// src/services/credenciaisFirebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBWWzP7rXOYsSBpp0ebzuV_SWh5D8j3Oog",
  authDomain: "aulaappunipam.firebaseapp.com",
  projectId: "aulaappunipam",
  storageBucket: "aulaappunipam.firebasestorage.app",
  messagingSenderId: "547324381362",
  appId: "1:547324381362:web:198d2996105bc09b1021ab"
};

// Inicializa o App
const appFirebase = initializeApp(firebaseConfig);

// **NOVO**: inicializa e exporta o Firestore
export const db = getFirestore(appFirebase);

// Mantém export default do App (útil caso queira)
export default appFirebase;
