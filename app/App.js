import React from "react";
import CoinTicker from "./CoinTicker";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <div className="root container">
                <CoinTicker />
            </div>
        );
    }
}

export default App;
