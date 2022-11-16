import {auth, db} from './base';
import {
    collection,
    addDoc, query,  getDocs,  orderBy,
} from "firebase/firestore";

const BLOG ='blog'

export const saveBlog =  async (blog) => {
    const docRef = await addDoc(collection(db, BLOG), blog);
    return docRef.id;

}
export const getBlogs = async(order) =>
{
    const q = query(collection(db, BLOG),orderBy('createdAt',order));
    const querySnapshot = await getDocs(q);
    let result = [];
    querySnapshot.forEach((doc) =>
    {
        let row = doc.data()
        row.id = doc.id;
        result.push(row);
    });
    return result;
};