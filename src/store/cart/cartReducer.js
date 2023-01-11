import * as actions from "./actionTypes";
import {handleActions} from 'redux-actions';

const initialState = [];


export const addToCart = function addToCart(state = initialState, {payload}) {
    
    if (payload.length === 0) {
        return initialState;
    }
    return payload;
}

const handlers = {
    [actions.ADD_TO_CART]: addToCart,
}

export const cart = handleActions(handlers, initialState);