import React from 'react';

const urls = [
    'https://www.bitstamp.net/api/v2/ticker/btcusd',
    'https://www.bitstamp.net/api/v2/ticker/bchusd',
    'https://www.bitstamp.net/api/v2/ticker/ethusd',
    'https://www.bitstamp.net/api/v2/ticker/ltcusd',
    'https://www.bitstamp.net/api/v2/ticker/xrpusd'
];

fetch('https://www.bitstamp.net/api/v2/ticker/btcusd')
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
    })
    .catch((error) => {
        console.log(error)
    });

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