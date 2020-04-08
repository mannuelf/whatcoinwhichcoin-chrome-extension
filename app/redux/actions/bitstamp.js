import {GET_BITSTAMP_COINS} from "./actionTypes";
import config from '../../config/default';
import Axios from 'axios';

export const getBitstampCoins = () => {
    let coinss;
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
                        coinss.btcusd = singleCoin;
                        break;
                    case 'bchusd':
                        coinss.bchusd = singleCoin;
                        break;
                    case 'ethusd':
                        coinss.ethusd = singleCoin;
                        break;
                    case 'ltcusd':
                        coinss.ltcusd = singleCoin;
                        break;
                    case 'xrpusd':
                        coinss.xrpusd = singleCoin;
                        break;
                    default:
                        console.log('No coins');
                }
            })
    });
    console.log(coinss);
    return {
        type: GET_BITSTAMP_COINS,
        coins: coinss
    }
};