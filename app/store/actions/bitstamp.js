import {GET_BITSTAMP_COINS} from "./types";
import * as uuid from "uuid";
import config from '../../config/default';
import Axios from 'axios';

const getCoins = (coins) => dispatch => {
    const id = uuid.v4();
    const coins= [
        {btcusd: {high: 100, low: 200}},
        {bchusd: {high: 100, low: 200}}
    ]
    dispatch({
        type: GET_BITSTAMP_COINS,
        payload: {coins, id}
    })
}