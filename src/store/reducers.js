import {combineReducers} from 'redux';
import {user} from './auth/authReducer';


const createRootReducer = () => combineReducers({
    user
});

export default createRootReducer;