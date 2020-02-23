import React from "react";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <div className="root container">
                <div className="block animated fadeIn">
                    <section>
                        <div>
                            <a href="#" className="block__btn--std animated flipInX">
                                <span className="block__btn--coin">BTC</span>
                                <span className="block__btn--currency">$</span>
                                <span className="block__btn--price">10024.08</span>
                            </a>
                        </div>
                    </section>
                </div>
                <div className="block animated fadeIn">
                    <section>
                        <div>
                            <a href="#" className="block__btn--std animated flipInX">
                            <span className="block__btn--coin">BCH</span>
                            <span className="block__btn--currency">$</span>
                            <span className="block__btn--price">400.71</span>
                            </a>
                        </div>
                    </section>
                </div>
                <div className="block animated fadeIn">
                    <section>
                        <div>
                            <a href="#" className="block__btn--std animated flipInX">
                                <span className="block__btn--coin">ETH</span>
                                <span className="block__btn--currency">$</span>
                                <span className="block__btn--price">275.60</span>
                            </a>
                        </div>
                    </section>
                </div>
                <div className="block animated fadeIn">
                    <section>
                        <div>
                            <a href="#" className="block__btn--std animated flipInX">
                                <span className="block__btn--coin">XRP</span>
                                <span className="block__btn--currency">$</span>
                                <span className="block__btn--price">0.28550</span>
                            </a>
                        </div>
                    </section>
                </div>
                <div className="block animated fadeIn">
                    <section>
                        <div>
                            <a href="#" className="block__btn--std animated flipInX">
                                <span className="block__btn--coin">LITECOIN</span>
                                <span className="block__btn--currency">$</span>
                                <span className="block__btn--price">80.19</span>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
