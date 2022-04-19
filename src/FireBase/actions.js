import {auth} from './base'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

export const registerUser =(email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}

export const loginUser = (email,password) =>{
    return signInWithEmailAndPassword(auth, email, password);

}