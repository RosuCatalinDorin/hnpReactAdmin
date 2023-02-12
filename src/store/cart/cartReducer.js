import * as actions from "./actionTypes";
import {handleActions} from 'redux-actions';


const getInitialStateFromLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(cart);
    }
    return [];
}
const initialState = getInitialStateFromLocalStorage();


export const addToCart = function addToCart(state = initialState, {payload}) {
    
    localStorage.setItem('cart', JSON.stringify(payload));
    return payload;
}

const handlers = {
    [actions.ADD_TO_CART]: addToCart,
}

export const cart = handleActions(handlers, initialState);