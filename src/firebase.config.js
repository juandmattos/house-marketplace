// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkCi9XmK8-3dXO8gb_VS_4tgoOCCVjvi4",
  authDomain: "house-marketplace-app-306a4.firebaseapp.com",
  projectId: "house-marketplace-app-306a4",
  storageBucket: "house-marketplace-app-306a4.appspot.com",
  messagingSenderId: "584364797809",
  appId: "1:584364797809:web:f5a90af513f4b2b7d010d0"
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
