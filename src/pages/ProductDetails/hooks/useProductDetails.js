import {getProductsDetails} from "../../../apiCalls/api/Products";
import {useState} from "react";

export default function useUserDetails()
{
    const [product, setDetails] = useState();

    const setProductDetails =  async (id) =>
    {
        const details = await getProductsDetails(id)
        setDetails(details.data._source);
    };

    return [product, setProductDetails];
}

