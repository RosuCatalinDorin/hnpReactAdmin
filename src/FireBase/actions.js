import {auth, db} from './base';
import {createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword} from "firebase/auth";
import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    orderBy,
    query,
    startAfter,
    where,
    writeBatch,
} from "firebase/firestore";

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
    });

    await batch.commit();

};
export const saveProducts = async (prodact) => {
    const products = 'products';
    const docRef = await addDoc(collection(db, products), prodact);
    return docRef.id;
};


export const getTopProducts = async () => {

    const citiesRef = collection(db, "products");
    const q = query(citiesRef, limit(10));
    const querySnapshot = await getDocs(q);
    let result = [];
    querySnapshot.forEach((doc) => {
        result.push(doc.data());
    });
    return result;
}

export const getProducts = async (fiters = null) => {
    const citiesRef = collection(db, "products");
    const q = query(citiesRef, where("UDX.APPAREA", "in", fiters.UDX_APPAREA), limit(10));
    const querySnapshot = await getDocs(q);
    let result = [];
    querySnapshot.forEach((doc) => {
        result.push(doc.data());
    });
    console.log(result);
    return result;
};
export const getProductsPagionation = async () => {

    const first = query(
        collection(db, "products"),
        orderBy("UDX.APPAREA"),
        limit(10));
    const documentSnapshots = await getDocs(first)
    const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];

    const next = query(collection(db, "products"),
        orderBy("UDX.APPAREA"),
        startAfter(lastVisible),
        limit(10));
    const querySnapshot = await getDocs(next);
    let result = [];
    querySnapshot.forEach((doc) => {
        let row = doc.data()
        row.id = doc.id;
        result.push(row);
    });
    return result

}

export const getDocumentById = async (collection, id) => {
    const refDoc = await getRefDocumentById(collection, id);
    console.log({id: refDoc.id, ...refDoc.data()});
    debugger
    return {id: refDoc.id, ...refDoc.data()}
}

const getRefDocumentById = async (collection, id) => {
    const docRef = doc(db, collection, id);
    const lastDocRef = await getDoc(docRef)
    return lastDocRef;
}

export const fetchMore = async (lastDoc) => {
    const lastDocRef = await getRefDocumentById('products', lastDoc.id);

    const next = query(
        collection(db, "products"),
        orderBy("UDX.APPAREA"),
        startAfter(lastDocRef),
        limit(10));
    const querySnapshot = await getDocs(next);
    let result = [];
    querySnapshot.forEach((doc) => {
        let row = doc.data()
        row.id = doc.id;
        result.push(row);
    });
    return result;
}