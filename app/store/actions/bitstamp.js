import {GET_BITSTAMP_COINS} from "./types";
import config from '../../config/default';
import Axios from 'axios';

export const getBitstampCoins = () => {
    let allCoins;
    config.api.bitstamp.map(url => {
        Axios.get(`${config.api.corsFix}${url}`,
            {headers: {'X-Requested-With': 'XMLHttpRequest'}})
            .then((response) => {
                return response;
            })
            .then((json) => {
                const singleCoin = json.data;
                const coinName = url.substr(url.length - 6);
                switch (coinName) {
                    case 'btcusd':
                        allCoins.btcusd = singleCoin;
                        break;
                    case 'bchusd':
                        allCoins.bchusd = singleCoin;
                        break;
                    case 'ethusd':
                        allCoins.ethusd = singleCoin;
                        break;
                    case 'ltcusd':
                        allCoins.ltcusd = singleCoin;
                        break;
                    case 'xrpusd':
                        allCoins.xrpusd = singleCoin;
                        break;
                    default:
                        console.log('No coins');
                }
            })
    });
    console.log(allCoins);
    return {
        type: GET_BITSTAMP_COINS,
        coins: allCoins
    }
};