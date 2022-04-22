import * as actions from './actionTypes.js';

export const setUser = (user) =>
{
    return {
        type: actions.SET_USER,
        payload: user,
    };
};

