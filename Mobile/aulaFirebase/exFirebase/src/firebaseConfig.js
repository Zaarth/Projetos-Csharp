// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initialieFirestore} from 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3JhL9_8L0NDzf-HG5yN3qUGTMgWJI8y0",
  authDomain: "aulafirebaseprincipal.firebaseapp.com",
  projectId: "aulafirebaseprincipal",
  storageBucket: "aulafirebaseprincipal.firebasestorage.app",
  messagingSenderId: "125788448560",
  appId: "1:125788448560:web:ba8d095b522214613f8af5",
  measurementId: "G-EW59T3PLG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
    useFetchStreams: false,
});

export {db};