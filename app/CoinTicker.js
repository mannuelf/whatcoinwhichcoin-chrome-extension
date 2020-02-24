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
            .then(function(response) {
                return response;
            })
            .then(function(json) {
                const respData = json.data;
                const coinName = url.substr(url.length - 6);
                switch (coinName) {
                    case 'btcusd':
                        console.log(respData);
                        break;
                    case 'bchusd':
                        console.log(respData);
                        break;
                    case 'ethusd':
                        console.log(respData);
                        break;
                    case 'ltcusd':
                        console.log(respData);
                        break;
                    case 'xrpusd':
                        console.log(respData);
                        break;
                    default:
                        console.log('No coins');
                }
            })

    })
} catch (error) {
    console.log(error)
}

function CoinTicker(props) {
    return (
        <a href="#" className="block__btn--std animated flipInX">
            <span className="block__btn--coin">{props.coin}</span>
            <span className="block__btn--currency">{props.currency}</span>
            <span className="block__btn--price">{props.price}</span>
        </a>
    );
}

export default CoinTicker;