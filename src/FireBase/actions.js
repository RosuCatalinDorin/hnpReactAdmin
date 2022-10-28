import {auth, db} from './base';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import {
    collection,
    addDoc,
    query,
    where,
    getDocs,
    writeBatch,
    doc,
    orderBy,
    startAfter,
    limit,
} from "firebase/firestore";

export const registerUser = async(email, password) =>
{
    const result = await createUserWithEmailAndPassword(auth, email, password);
    //todo url-ul este acele catre care se redirectioneaza dupa ce ai confirmata adresa de mail.
    const actionCodeSettings = {
        url: 'http://localhost/?email=user@example.com',
    };
    await sendEmailVerification(result.user, actionCodeSettings);
    return result;
};

export const loginUser = (email, password) =>
{
    return signInWithEmailAndPassword(auth, email, password);

};

export const getCollection = async(collectionName) =>
{
    const querySnapshot = await getDocs(collection(db, collectionName));
    let documents = [];
    querySnapshot.forEach((doc) =>
    {
        // doc.data() is never undefined for query doc snapshots
        if(collectionName === "users") {
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
    console.log(documents);
    return documents;
};

export const savePartner = async(partner) =>
{
    const partnersCollection = 'partners';
    try {
        const docRef = await addDoc(collection(db, partnersCollection), partner);
        console.log("Document written with ID: ", docRef.id);
    } catch(e) {
        console.error("Error adding document: ", e);
    }
};

export const saveUserDetails = async(id, userDetails) =>
{
    const userCollection = "users";
    userDetails.userId = id;
    try {
        const docRef = await addDoc(collection(db, userCollection), userDetails);
        console.log("Document written with ID: ", docRef.id);
    } catch(e) {
        console.error("Error adding document: ", e);
    }
};

export const getDocumentProperty = async(entity, property, value) =>
{
    const q = query(collection(db, entity), where(property, "==", value));
    const querySnapshot = await getDocs(q);
    let result = {};
    querySnapshot.forEach((doc) =>
    {
        result = doc.data();
    });
    return result;
};
export const saveUserCompany = async(data) =>
{
    const batch = writeBatch(db);

    const user = doc(db, 'users', data.user.id);
    batch.update(user, {
        companyId: data.company.id,
        companyName: data.company.name,
    });

    await batch.commit();

};
export const saveProducts = async(prodact) =>
{
    const products = 'products';
    const docRef = await addDoc(collection(db, products), prodact);
    return docRef.id;
};


export const getTopProducts = async () =>{

    const citiesRef = collection(db, "products");
    const q = query(citiesRef, limit(10));
    const querySnapshot = await getDocs(q);
    let result = [];
    querySnapshot.forEach((doc) =>
    {
        result.push(doc.data());
    });
    return result;
}

export const getProducts = async(fiters = null) =>
{
    debugger;
    const citiesRef = collection(db, "products");
    const q = query(citiesRef,where("UDX.APPAREA", "in", fiters.UDX_APPAREA), limit(10));
    const querySnapshot = await getDocs(q);
    let result = [];
    querySnapshot.forEach((doc) =>
    {
        result.push(doc.data());
    });
    console.log(result);
    return result;
};
export const getProductsPagionation =  async  () =>{
    const first = query(collection(db, "products"), orderBy("APPAREA"), limit(25));

    const documentSnapshots = await getDocs(first);
    debugger
    console.log("test", documentSnapshots.docs.length-1);
    // Get the last visible document
    const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
    console.log("last", lastVisible);

    // Construct a new query starting at this document,
    // get the next 25 cities.
    const next = query(collection(db, "products"),
        orderBy("APPAREA"),
        startAfter(lastVisible),
        limit(25));
}
