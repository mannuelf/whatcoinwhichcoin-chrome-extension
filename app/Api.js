import React from 'react';
import Axios from 'axios';

async function getCoins() {
    const urls = [
        'https://www.bitstamp.net/api/v2/ticker/btcusd',
        'https://www.bitstamp.net/api/v2/ticker/bchusd',
        'https://www.bitstamp.net/api/v2/ticker/ethusd',
        'https://www.bitstamp.net/api/v2/ticker/ltcusd',
        'https://www.bitstamp.net/api/v2/ticker/xrpusd'
    ];
    try {
        await urls.map(async url => {
            const response = await Axios.get(url)
            if (response.status === 200) {
                const respData = await response.data;
                const coinName = url.substr(url.length - 6);
                switch (coinName) {
                    case 'btcusd':
                        console.log("btcusd",respData);
                        break;
                    case 'bchusd':
                        console.log("bchusd",respData);
                        break;
                    case 'ethusd':
                        console.log("ethusd",respData);
                        break;
                    case 'ltcusd':
                        console.log("ltcusd",respData);
                        break;
                    case 'xrpusd':
                        console.log("xrpusd",respData);
                        break;
                    default:
                        console.log('No coins');
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export default getCoins;