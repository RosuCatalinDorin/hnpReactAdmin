import {useState} from "react";
import {getDocumentById} from "../../../FireBase/actions";

export default function useUserDetails() {
    const [product, setDetails] = useState();

    const setProductDetails = async (id) => {
        const details = await getDocumentById('products', id)
        debugger
        setDetails(details);
    };

    return [product, setProductDetails];
}

