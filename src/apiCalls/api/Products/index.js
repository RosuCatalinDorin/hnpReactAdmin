import request from '../../axios/MyAxios';
import {createElkFilters} from './filters';
import Notiflix from 'notiflix';
const PATH = {
    GET_ELK_PRODUCTS: 'hnp/elk/products',
};

export const getHnpElkProducts = async (query =null) =>
{
    Notiflix.Loading.init();
    const data  = createElkFilters(query);
    return request({
        method:"POST",
        url:PATH.GET_ELK_PRODUCTS,
        data:data
    })
};