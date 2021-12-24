import { initializeApp } from 'firebase/app';
import { EmailAuthProvider } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyAXWKE916Fa4VWNnsxu9mYvAJF9fQYJqqI",
    authDomain: "anywhere-fitness-9.firebaseapp.com",
    projectId: "anywhere-fitness-9",
    storageBucket: "anywhere-fitness-9.appspot.com",
    messagingSenderId: "557139415925",
    appId: "1:557139415925:web:99394533fde24a763ef93c"
};

initializeApp(config);

const auth = EmailAuthProvider.credential();

export default auth;