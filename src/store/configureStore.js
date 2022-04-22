import {createStore, applyMiddleware, compose} from "redux";
import thunkMid from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewareEnhancer = applyMiddleware(thunkMid);
export const configureStore = createStore(reducers(), composeEnhancers(middlewareEnhancer));