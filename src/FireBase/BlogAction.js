import {auth, db} from './base';
import {
    collection,
    addDoc, query, limit, getDocs,
} from "firebase/firestore";

export const saveBlog =  async (blog) => {
    const blogName = 'blog';
    const docRef = await addDoc(collection(db, blogName), blog);
    return docRef.id;

}