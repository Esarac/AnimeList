// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAMBJJeLy8djYEMSLAurYfwhzyQMyWk_s",
  authDomain: "mememaker-f2dd4.firebaseapp.com",
  projectId: "mememaker-f2dd4",
  storageBucket: "mememaker-f2dd4.appspot.com",
  messagingSenderId: "578446672614",
  appId: "1:578446672614:web:50316a6976c8420a5cf127"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export const createUser = async (email: string, password: string) => await createUserWithEmailAndPassword(auth, email, password)
export const signInUser = async (email: string, password: string) => await signInWithEmailAndPassword(auth, email, password)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export const addData = async (path: string, id: string, data:any) => await setDoc(doc(db, path, id), data)
export const getData = async (path: string, id: string) => await getDoc(doc(db, path, id))
export const updateData = async (path: string, id: string, data:any) => await updateDoc(doc(db, path, id), data)