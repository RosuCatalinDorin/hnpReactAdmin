import * as actions from './actionTypes';
import {handleActions} from 'redux-actions';

const initState = {
    emailVerified: null,
    email: null,
    uid: null,
    lastLoginAt:null,
    createdAt:null,
    providerData:null
};

export const setUser = function setUser(state = initState, {payload})
{
    return {...state, ...payload};
};

const handlers = {
    [actions.SET_USER]: setUser,
};

export const user = handleActions(handlers, initState);