import {combineReducers} from 'redux';
import {user} from './auth/authReducer';
import {cart} from "./cart/cartReducer";


const createRootReducer = () => combineReducers({
    user,
    cart
});

export default createRootReducer;