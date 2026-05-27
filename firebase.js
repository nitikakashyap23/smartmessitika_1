// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCB688N51X7u2f6ad9eU89HQAifZ1enUlI",
//     authDomain: "smartmass-b2c95.firebaseapp.com",
//     projectId: "smartmass-b2c95",
//     storageBucket: "smartmass-b2c95.firebasestorage.app",
//     messagingSenderId: "507283174853",
//     appId: "1:507283174853:web:c14342ce1a34b14076c7ac",
//     measurementId: "G-Y1B24JTG8M"
// };


const firebaseConfig = {
  apiKey: "AIzaSyAqeRvplzhyLPie6Hw4-1OhFI7EMvYeiGU",
  authDomain: "project-smartmess-43131.firebaseapp.com",
  projectId: "project-smartmess-43131",
  storageBucket: "project-smartmess-43131.firebasestorage.app",
  messagingSenderId: "1081138456900",
  appId: "1:1081138456900:web:6932a50e4875a7c8958f11",
  measurementId: "G-M5RV27YTTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth()
export const db= getFirestore()

