import request from '../../axios/MyAxios';
import {createElkFilters} from './filters';
import Notiflix from 'notiflix';

const PATH = {
    GET_ELK_PRODUCTS: 'hnp/elk/data',
    SAVE_PRODUCT: 'save/telegram/channels',
    GET_ELK_PRODUCT_DETAILS: 'hnp/elk/getProductByID/',
};

export const getHnpElkProducts = async (query = null, index = 'hnp-store-article', from, size, searchText) => {
    Notiflix.Loading.init();
    const data = createElkFilters(query, index, from, size, searchText);
    console.log(data);
    return request({
        method: "POST",
        url: PATH.GET_ELK_PRODUCTS,
        data: data,
    });
};
export const getProductsDetails = async (id) => {
    Notiflix.Loading.init();
    return request({
        method: "GET",
        url: PATH.GET_ELK_PRODUCT_DETAILS + id
    })
};
export const saveProduct = async (data) => {
    Notiflix.Loading.init();
    return request({
        method: "POST",
        url: PATH.SAVE_PRODUCT,
        data: data,
    });
}