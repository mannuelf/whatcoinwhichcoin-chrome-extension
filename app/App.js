import * as React from 'react';
import {createStore, applyMiddleware} from 'redux';
import reducer from './redux/rootReducer';
import {Provider} from 'react-redux';
import CoinTicker from './components/CoinTicker';
import './App.css';

const store = createStore(reducer);

export default function App() {
    return (
        <Provider store={store}>
            <div className="root container">
                <CoinTicker/>
            </div>
        </Provider>
    );
}