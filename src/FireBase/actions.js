import {auth, db} from './base';
import {createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword} from "firebase/auth";
import {addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where, writeBatch} from "firebase/firestore";

export const registerUser = async (email, password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    //todo url-ul este acele catre care se redirectioneaza dupa ce ai confirmata adresa de mail.
    const actionCodeSettings = {
        url: 'http://localhost/?email=user@example.com',
    };
    await sendEmailVerification(result.user, actionCodeSettings);
    return result;
};

export const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);

};

export const activateEmailAddress = async (uid) => {
    try {
        const washingtonRef = doc(db, "users", uid);
        await updateDoc(washingtonRef, {
            isVerified: true
        });
        return true
    } catch {
        return false
    }
}

export const getCollectionByUser = async (document, userId) => {
    const q = query(collection(db, document), where("user.uid", "==", userId));
    let documents = [];
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        documents.push({
            ...{id: doc.id},
            ...doc.data(),
        });
    });
    return documents;
}

export const getCollection = async (collectionName) => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    let documents = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        if (collectionName === "users") {
            documents.push(
                {
                    ...{id: doc.id},
                    ...{idAuth: doc.data().userId},
                    ...doc.data(),
                });
        } else {
            documents.push({
                ...{id: doc.id},
                ...doc.data(),
            });
        }
    });
    return documents;
};
export const savePartner = async (partner) => {
    const partnersCollection = 'partners';
    try {
        const docRef = await addDoc(collection(db, partnersCollection), partner);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};
export const saveUserDetails = async (id, userDetails) => {
    const userCollection = "users";
    userDetails.userId = id;
    try {
        const docRef = await addDoc(collection(db, userCollection), userDetails);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};
export const getDocumentProperty = async (entity, property, value) => {
    const q = query(collection(db, entity), where(property, "==", value));
    const querySnapshot = await getDocs(q);
    let result = {};
    querySnapshot.forEach((doc) => {
        result = doc.data();
    });
    return result;
};
export const saveUserCompany = async (data) => {
    const batch = writeBatch(db);

    const user = doc(db, 'users', data.user.id);
    batch.update(user, {
        companyId: data.company.id,
        companyName: data.company.name,
        status: true
    });

    await batch.commit();

};
export const getDocumentById = async (collection, id) => {
    const refDoc = await getRefDocumentById(collection, id);
    console.log({id: refDoc.id, ...refDoc.data()});
    return {id: refDoc.id, ...refDoc.data()}
}
const getRefDocumentById = async (collection, id) => {
    const docRef = doc(db, collection, id);
    const lastDocRef = await getDoc(docRef)
    return lastDocRef;
}
export const saveOrder = async (order) => {
    try {
        const collectionName = 'orders';
        return await addDoc(collection(db, collectionName), order);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
