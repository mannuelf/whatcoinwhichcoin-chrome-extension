import React, { Component } from 'react';
import CoinTicker from "./components/CoinTicker";
import "./App.css";

export default function App() {
    return (
        <div className="root container">
            <CoinTicker />
        </div>
    );
}