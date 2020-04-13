import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import logger from 'redux-logger';

const initState = {};
const middleware = [thunk, logger];
let store;

store = createStore(
    rootReducer,
    initState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;