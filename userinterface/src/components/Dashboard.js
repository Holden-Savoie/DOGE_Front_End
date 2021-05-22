import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Constants from './constants';
import dogerocketboi from "../imgs/doge-rocket-boi.png"
import moon from "../imgs/moon.png"
import "../styles/logStyles.css"

export default function Dashboard(props) {
    const [price, setPrice] = useState(0.0000);
    const [diff, setDiff] = useState(0.0000);
    const [s, setS] = useState();
    let top = (150 - price * 150 + 15);
    let left = (price > .2) ? (price * 100 - 30) : -10;
    useEffect(() => {
        const interval = setInterval(() => {
            getCurrentPrice()
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        document.title = price;
    }, [price]);

    function getCurrentPrice() {
        axios.get(Constants.URL + `dogePrice`)
            .then(res => {
                setDiff(res.data.price-price)
                setPrice(res.data.price)
            })
    }

    if (price <= 0 || !price) {
        return (<h1 style={{ color: "black" }}>Loading...</h1>)
    }
    return (
        <div id="space">
            <div id="titleInfo">
                <h1><em>Dogecoin Price Tracker</em></h1>
                <h1 id="price">{"$" + price}</h1>
            </div>
            <div className="line" id="one"><h3>$1.00</h3><hr /></div>
            <div className="line" id="threeQuarters"><h3>$0.75</h3><hr /></div>
            <div className="line" id="half"><h3>$0.50</h3><hr /></div>
            <div className="line" id="oneQuarter"><h3>$0.25</h3><hr /></div>
            <p id="statusChange" style={{
            color: (diff< 0) ? "red" : "green",
            top: (top - 10) + "vh", left: (left + 15) + "vw"
        }}>
            {(diff < 0) ? "-$" + (diff*-1).toFixed(4) : "+$" + (diff).toFixed(4)}</p>
            <img id="doge" style={{
                top: top + "vh",
                left: left + "vw",
                mixBlendMode: (diff < 0) ? "luminosity" : ""
            }}
                src={dogerocketboi} alt="dogerocketboi.png" ></img>
            <img id="moon" src={moon} alt="moon.png"></img>
        </div>
    );
}