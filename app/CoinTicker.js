import React from 'react';
import Axios from 'axios';
const cors = 'https://cors-anywhere.herokuapp.com/';
const urls = [
    'https://www.bitstamp.net/api/v2/ticker/btcusd',
    'https://www.bitstamp.net/api/v2/ticker/bchusd',
    'https://www.bitstamp.net/api/v2/ticker/ethusd',
    'https://www.bitstamp.net/api/v2/ticker/ltcusd',
    'https://www.bitstamp.net/api/v2/ticker/xrpusd'
];
let coins = [];
try {
    urls.map(url => {
        Axios.get(`${cors}${url}`,
        {headers: {'X-Requested-With': 'XMLHttpRequest'}})
        .then((response) => {
            return response;
        })
        .then((json) => {
            const singleCoin = json.data;
            const coinName = url.substr(url.length - 6);
            switch (coinName) {
                case 'btcusd':
                    coins.btcusd = singleCoin;
                    break;
                case 'bchusd':
                    coins.bchusd = singleCoin;
                    break;
                case 'ethusd':
                    coins.ethusd = singleCoin;
                    break;
                case 'ltcusd':
                    coins.ltcusd = singleCoin;
                    break;
                case 'xrpusd':
                    coins.xrpusd = singleCoin;
                    break;
                default:
                    console.log('No coins');
            }
        })
    })
} catch (error) {
    console.log(error)
}
console.log(typeof coins, coins)
function CoinTicker(coins) {
    console.log(typeof coins, coins)
    return ("hello");
}

export default CoinTicker;