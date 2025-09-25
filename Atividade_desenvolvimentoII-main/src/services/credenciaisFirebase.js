// src/services/credenciaisFirebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyApXJeVti0SGB9ZFvpgdtiHB7gZda5D9i4",
  authDomain: "aulafirebase-8bffa.firebaseapp.com",
  projectId: "aulafirebase-8bffa",
  storageBucket: "aulafirebase-8bffa.firebasestorage.app",
  messagingSenderId: "815292593378",
  appId: "1:815292593378:web:98087bb631a77e23f0dabb",
  measurementId: "G-CYQ1P20N3Q"
};

// Inicializa o App
const appFirebase = initializeApp(firebaseConfig);

// **NOVO**: inicializa e exporta o Firestore
export const db = getFirestore(appFirebase);

// Mantém export default do App (útil caso queira)
export default appFirebase;