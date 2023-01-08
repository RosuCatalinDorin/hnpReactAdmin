import {useState} from "react";
import {getProductsDetails} from "../../../apiCalls/api/Products";

export default function useUserDetails() {
    const [product, setDetails] = useState();

    const setProductDetails = async (id) => {

        const details = await getProductsDetails(id)
        setDetails(details.data);
    };

    return [product, setProductDetails];
}

