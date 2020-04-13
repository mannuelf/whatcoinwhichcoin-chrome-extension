import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {Coins} from '../store/actions/bitstamp';

const CoinTicker = ({Coins}) => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        setCoins(Coins);
    }, []);


}

CoinTicker.propTypes = {
    coins: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    coins: state.coins,
})

export default connect(mapStateToProps)(CoinTicker);