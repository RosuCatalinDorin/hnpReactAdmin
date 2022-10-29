import request from '../../axios/MyAxios';
import {createElkFilters} from './filters';
import Notiflix from 'notiflix';

const PATH = {
    GET_ELK_PRODUCTS: 'hnp/elk/products',
    GET_ELK_PRODUCT_DETAILS: 'hnp/elk/getDocumentById/',
};

export const getHnpElkProducts = async(query = null) =>
{
    Notiflix.Loading.init();
    const data = createElkFilters(query);
    return request({
        method: "POST",
        url: PATH.GET_ELK_PRODUCTS,
        data: data,
    });
};
export const getProductsDetails = async(id) =>
{
    Notiflix.Loading.init();
    return request({
        method:"GET",
        url:PATH.GET_ELK_PRODUCT_DETAILS+id
    })
};