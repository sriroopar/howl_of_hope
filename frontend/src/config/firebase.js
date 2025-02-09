import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDPSjP0T7q1iT4sOVqEVs2y9I0Po0MRvfs",
    authDomain: "howl-of-hope.firebaseapp.com",
    projectId: "howl-of-hope",
    storageBucket: "howl-of-hope.firebasestorage.app",
    messagingSenderId: "106333082623",
    appId: "1:106333082623:web:30f7579fdcaa7d4b5acdca",
    measurementId: "G-N8S0TG1K0T"
  };

  
  const app = initializeApp(firebaseConfig);
  export const auth= getAuth(app);
  export const googleProvider = new GoogleAuthProvider(app);
  
  