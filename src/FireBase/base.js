import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAWM_336f6p4ZbIqn5bvC-5IXcj2yU7-9s",
    authDomain: "hnp-store.firebaseapp.com",
    databaseURL: "https://hnp-store-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hnp-store",
    storageBucket: "hnp-store.appspot.com",
    messagingSenderId: "509173862482",
    appId: "1:509173862482:web:254a3f60285df6d3b00f8b",
    measurementId: "G-JG92RT08ZY"
});

export const auth = getAuth()
export const db  = getFirestore(app)
export default app
