// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCEZLfQdfAYCoPXpRzVeZW4x2rQkLEEkM",
  authDomain: "react-cursos-b5370.firebaseapp.com",
  projectId: "react-cursos-b5370",
  storageBucket: "react-cursos-b5370.appspot.com",
  messagingSenderId: "269337772580",
  appId: "1:269337772580:web:ba01f87b9328540a57ceb1"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );