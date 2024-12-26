// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJdihZQEpTlgluBvkQCmpsDEQsSbt-q3c",
  authDomain: "netflix-clone-21f40.firebaseapp.com",
  projectId: "netflix-clone-21f40",
  storageBucket: "netflix-clone-21f40.firebasestorage.app",
  messagingSenderId: "849344823898",
  appId: "1:849344823898:web:d0806ad4fae454e2b8ce63",
  measurementId: "G-ZBFQFYPMG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name,email,password)=>{
 try{
  const res =  await createUserWithEmailAndPassword(auth,email,password);
  const user = res.user;
  await addDoc(collection(db, "user"),{
    uid : user.uid,
    name,
    authProvider: "local",
    email,
  })
 }catch(e){
   console.log(e);
   toast.error(e.code.split('/')[1].split('-').join(" "));
 }
}

const login = async (email, password)=>{
    try{
    await signInWithEmailAndPassword(auth,email, password);
    }catch(e){
     console.log(e);
     toast.error(e.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth,db,login,logout,signup}