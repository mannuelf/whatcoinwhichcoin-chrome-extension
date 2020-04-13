import {GET_BITSTAMP_COINS} from '../actions/types';

const initState = [];

export default (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_BITSTAMP_COINS:
            return [...state, payload]
        default:
            return state;
    }
};