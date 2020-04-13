import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getBitstampCoins} from '../store/actions/bitstamp';

function CoinTicker(props) {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        setCoins(props.coins);
    },[]);

    return (
        <section>
            {
            coins.map(coin => {
                console.log("=>", coin.btc);
            })
            }
        </section>
    );
}

export default connect(null, {getBitstampCoins})(CoinTicker);