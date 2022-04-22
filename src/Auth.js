import React, {useContext, useState, useEffect} from "react";
import {auth} from "./FireBase/base";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth()
{
    return useContext(AuthContext);
}

export function AuthProvider({children})
{
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    function signup(email, password)
    {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password)
    {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout()
    {
        return signOut(auth);
    }

    function resetPassword(email)
    {
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(async() =>
    {
        const unsubscribe = await auth.onAuthStateChanged(user =>
        {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);


    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        setCurrentUser,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
