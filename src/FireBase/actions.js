import {auth} from './base'
import { createUserWithEmailAndPassword } from "firebase/auth";

export const registerUser =(email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}