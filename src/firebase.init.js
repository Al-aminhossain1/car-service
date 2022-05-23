// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    // apiKey: "AIzaSyAd0zPluywkIBXInlCmcKJ-kSpeF_uXl1Y",
    // authDomain: "car-services-a2612.firebaseapp.com",
    // projectId: "car-services-a2612",
    // storageBucket: "car-services-a2612.appspot.com",
    // messagingSenderId: "318379879597",
    // appId: "1:318379879597:web:f5032b68ba59044c08aa24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;