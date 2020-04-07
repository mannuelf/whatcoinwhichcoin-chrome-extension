import {GET_BITSTAMP_COINS} from "./actionTypes";

export const getBitstampCoins = (payload) => {
    return {
        type: GET_BITSTAMP_COINS,
        coinResults: payload
    }
};