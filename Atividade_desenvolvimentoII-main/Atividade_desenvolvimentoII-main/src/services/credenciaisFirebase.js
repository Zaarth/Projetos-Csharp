 // src/services/credenciaisFirebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDc_PHgKFxAHLGNiYM-rTgnJ79TAXTN9pA",
  authDomain: "testerafael-1e68d.firebaseapp.com",
  projectId: "testerafael-1e68d",
  storageBucket: "testerafael-1e68d.firebasestorage.app",
  messagingSenderId: "582659876868",
  appId: "1:582659876868:web:d438cb6cbe4bd1db862d51"
};
// Inicializa o App
const appFirebase = initializeApp(firebaseConfig);

// **NOVO**: inicializa e exporta o Firestore
export const db = getFirestore(appFirebase);

// Mantém export default do App (útil caso queira)
export default appFirebase;