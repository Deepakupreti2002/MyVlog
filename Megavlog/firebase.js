// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLyPIpgkborHO6D8coVAlj77_QaOKmOFc",
  authDomain: "myvlog-2b286.firebaseapp.com",
  projectId: "myvlog-2b286",
  storageBucket: "myvlog-2b286.appspot.com",
  messagingSenderId: "947514521601",
  appId: "1:947514521601:web:c1a1940c736fcfc3b9e800",
  measurementId: "G-STTHFD5GCK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
