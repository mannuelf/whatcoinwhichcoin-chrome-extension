import {GET_BITSTAMP_COINS} from '../actions/actionTypes';
const initState = {coins: [{btc: {high: 199, low: 99}}, {bch: {high: 199, low: 99}}]};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_BITSTAMP_COINS:
            return {
                ...state,
                coins: action.payload,
            };
        default:
            return state;
    }
};