import React from "react";
import CoinTicker from "./CoinTicker";
import Api from './Api';
import "./App.css";

fetch('https://www.bitstamp.net/api/v2/ticker/btcusd')
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
    })
    .catch((error) => {
        console.log(error)
    })

class App extends React.Component {
    render() {
        return (
            <div className="root container">
                <CoinTicker coin={"BTC"} currency={"$"} price={300} />
                <CoinTicker coin={"BCH"} currency={"$"} price={500} />
                <CoinTicker coin={"LITECOIN"} currency={"$"} price={600} />
                <CoinTicker coin={"ETHERIUM"} currency={"$"} price={500} />
                <CoinTicker coin={"XRP"} currency={"$"} price={800} />
            </div>
        );
    }
}

export default App;
