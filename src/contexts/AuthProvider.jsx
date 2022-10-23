import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, sendEmailVerification, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.init';

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userUpdate = (firstName, lastName) => {
        return updateProfile(auth.currentUser, {
            displayName: firstName + " " + lastName
        })
    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const logOut = () => signOut(auth);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(!currentUser || currentUser.emailVerified){
                setUser(currentUser);
            }
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const value = {
        user,
        loginUser,
        createUser,
        userUpdate,
        verifyEmail,
        logOut,
        providerLogin
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
}

export default AuthProvider;