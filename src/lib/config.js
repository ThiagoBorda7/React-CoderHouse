import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDWnQDb9fnh44OvZIgat8y1VHAMmMvaoas",
    authDomain: "zapatos-2a47c.firebaseapp.com",
    projectId: "zapatos-2a47c",
    storageBucket: "zapatos-2a47c.appspot.com",
    messagingSenderId: "730398309288",
    appId: "1:730398309288:web:6a26c0ef1e2cfd7bfcbb9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);