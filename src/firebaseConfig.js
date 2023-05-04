import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmPuHZ_PzUD-ipazaMXRaYPj81aueiYSQ",
  authDomain: "ecom-nunez-39650.firebaseapp.com",
  projectId: "ecom-nunez-39650",
  storageBucket: "ecom-nunez-39650.appspot.com",
  messagingSenderId: "199244511216",
  appId: "1:199244511216:web:5a3b5c9f5256ffbf620f35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
