import * as React from 'react';
import {Provider} from 'react-redux';
import store from "./store/index";
import CoinTicker from './components/CoinTicker';
import './App.css';

const App = () =>
    <Provider store={store}>
        <div className="root container">
            <CoinTicker/>
        </div>
    </Provider>

export default App;