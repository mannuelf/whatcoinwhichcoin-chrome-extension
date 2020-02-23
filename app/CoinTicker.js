import React from "react";

function CoinTicker(props) {
    return (
        <div className="block animated fadeIn">
            <section>
                <div>
                    <a href="#" className="block__btn--std animated flipInX">
                        <span className="block__btn--coin">{props.coin}</span>
                        <span className="block__btn--currency">{props.currency}</span>
                        <span className="block__btn--price">{props.price}</span>
                    </a>
                </div>
            </section>
        </div>
    );
}

export default CoinTicker;