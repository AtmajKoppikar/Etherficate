// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIfje7nKfrxfH5hAc_Df-qSrY0BAroOM8",
    authDomain: "etherficate.firebaseapp.com",
    databaseURL: "https://etherficate-default-rtdb.firebaseio.com",
    projectId: "etherficate",
    storageBucket: "etherficate.appspot.com",
    messagingSenderId: "1091608722763",
    appId: "1:1091608722763:web:140529eaf6c2b873babcce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);



