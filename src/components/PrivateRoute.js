import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

firebase.initializeApp({
    apiKey: "AIzaSyAXWKE916Fa4VWNnsxu9mYvAJF9fQYJqqI",
    authDomain: "anywhere-fitness-9.firebaseapp.com",
    projectId: "anywhere-fitness-9",
    storageBucket: "anywhere-fitness-9.appspot.com",
    messagingSenderId: "557139415925",
    appId: "1:557139415925:web:99394533fde24a763ef93c"
});

const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = (username, password) => {
        return firebase
        .auth()
        .signInWithEmailAndPassword(username, password)
        .then((response) => {
            setUser(response.user);
            return response.user;
        });
    };

    const signup = (username, password) => {
        return firebase
        .auth()
        .createUserWithEmailAndPassword(username, password)
        .then((response) => {
            setUser(response.user);
            return response.user;
        });
    };

    const signout = () => {
        return firebase
        .auth()
        .signOut()
        .then(() => {
            setUser(false);
        });
    };
    
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            setUser(user);
          } else {
            setUser(false);
          }
        });

        return () => unsubscribe();
    }, []);

    return {
        user,
        signin,
        signup,
        signout
    };
}