import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCJop_XSm_TaIjXVARhkmcuKAYfo73c6us",
    authDomain: "auth-ae532.firebaseapp.com",
    projectId: "auth-ae532",
    storageBucket: "auth-ae532.appspot.com",
    messagingSenderId: "139464850693",
    appId: "1:139464850693:web:7367ad18f400c906918b6c",
    measurementId: "G-0J2Q66GDN0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app)