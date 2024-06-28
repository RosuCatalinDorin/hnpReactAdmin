import {analytics, auth, db} from './base';
import {createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword} from "firebase/auth";
import {addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where, writeBatch} from "firebase/firestore";
import {logEvent} from "firebase/analytics";

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

export const getProductsPrice = async (ids) => {
    const q = query(collection(db, 'productsPrice'), where("SUPPLIER_ALT_AID_2", "in", ids));
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

export const getDocumentsActiveProperty = async (entity, property, value) => {
    const q = query(collection(db, entity), where(property, "==", value), where("active", "==", true));
    const querySnapshot = await getDocs(q);
    let result = [];
    querySnapshot.forEach((doc) => {
        result.push({...doc.data(), ...{uid: doc.id}});
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
export const saveFirebaseDocument = (collectionName, data) => {
    return addDoc(collection(db, collectionName), data);
}

export const saveOrder = async (order) => {
    try {
        logEvent(analytics, 'add_to_cart');
        const collectionName = 'orders';
        return await addDoc(collection(db, collectionName), order);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
export const saveProductPRice = async (products) => {
    let i = 0;
    let batch = writeBatch(db)
    let counter = 0;
    let totalCounter = 0;
    const promises = [];

    products.map(async (row) => {
        counter++;
        const product = {
            SUPPLIER_ALT_AID: row[9],
            SUPPLIER_ALT_AID_2: row[2],
            PRICE: row[10]
        }
        const nycRef = doc(db, "productsPrice", product.SUPPLIER_ALT_AID);
        batch.set(nycRef, product);
        if (counter >= 400) {
            console.log(`Committing batch of ${counter}`);
            promises.push(batch.commit());
            totalCounter += counter;
            counter = 0;
            batch = writeBatch(db)
        }

        await Promise.all(promises);

    })
    return "Done"

};