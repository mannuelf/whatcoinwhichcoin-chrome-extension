import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBitstampCoins} from '../redux/actions/bitstamp';

function CoinTicker(props) {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        setCoins(props.coins);
    },[]);

    return (
        <section>
            {
            coins.map(coin => {
                console.log("=>", coin.btc.high);
            })
            }
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        coins: state.BitstampReducer.coins
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getBitstampCoins
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinTicker);