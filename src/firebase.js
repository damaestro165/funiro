// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCaxAMz7mBTursuUQfY-M6dD3HUF1guRdk',
  authDomain: 'funiro-48c87.firebaseapp.com',
  projectId: 'funiro-48c87',
  storageBucket: 'funiro-48c87.appspot.com',
  messagingSenderId: '797059675257',
  appId: '1:797059675257:web:0da880f3a8bf75347d90a8',
  measurementId: 'G-V49XYS98Q6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
