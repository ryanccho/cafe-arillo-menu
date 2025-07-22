// to install, run
// npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl6ASYxcH0w5_w1DjdG6KAZA_BroDpiA8",
  authDomain: "cafe-arillo.firebaseapp.com",
  projectId: "cafe-arillo",
  storageBucket: "cafe-arillo.firebasestorage.app",
  messagingSenderId: "758330669991",
  appId: "1:758330669991:web:6683448fcedcfa51e21482"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// https://cafe-arillo-default-rtdb.firebaseio.com/

export { database };
