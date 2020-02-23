import React from "react";
import CoinTicker from "./CoinTicker";
import "./App.css";

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
