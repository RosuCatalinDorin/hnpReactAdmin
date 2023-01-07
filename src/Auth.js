import React, {useContext, useEffect, useState} from "react";
import {auth} from "./FireBase/base";
import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import {getDocumentProperty} from "./FireBase/actions";
import {INITIAL_STATE} from "./constants/constants";
import {useNavigate} from "react-router-dom";

const AuthContext = React.createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(INITIAL_STATE);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    useEffect(async () => {
        await auth.onAuthStateChanged(async (user) => {
            if (user !== null) {
                const userDetails = await getDocumentProperty("users", 'userId', user.uid);
                user.login = true;
                user.userDetails = userDetails;
                setCurrentUser(user);
            }
            setLoading(false);
        });

    }, []);

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);

    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);

    }

    async function logout() {
        await signOut(auth);
        navigate('/', {replace: true});
        setCurrentUser(INITIAL_STATE);
        return true
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
    }


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
