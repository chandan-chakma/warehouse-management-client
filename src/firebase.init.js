// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5qXSSdj6ks-R5IEGUJavcVAnVMXRgiEI",
    authDomain: "warehouse-management-sys-d419d.firebaseapp.com",
    projectId: "warehouse-management-sys-d419d",
    storageBucket: "warehouse-management-sys-d419d.appspot.com",
    messagingSenderId: "700966745927",
    appId: "1:700966745927:web:2d61f15b5a8051fdcefe62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;