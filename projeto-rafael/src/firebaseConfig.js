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
  apiKey: "AIzaSyBr_C88B8MFVkltN_rvkuYe6iklXSeAPf8",
  authDomain: "projeto-rafael-5d916.firebaseapp.com",
  projectId: "projeto-rafael-5d916",
  storageBucket: "projeto-rafael-5d916.firebasestorage.app",
  messagingSenderId: "359266636114",
  appId: "1:359266636114:web:0a4f3b3d9d8b093e14ea8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
    useFetchStreams: false,
});

export {db};