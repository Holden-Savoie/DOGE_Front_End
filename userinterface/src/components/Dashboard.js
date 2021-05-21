import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Constants from './constants';
import dogerocketboi from "../imgs/doge-rocket-boi.png"
import space from "../imgs/empty-space.jpg"
import moon from "../imgs/moon.png"
import "../styles/logStyles.css"

export default function Dashboard(props) {
    const [price, setPrice] = useState(0.0000);
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
                console.log(res);
                setPrice(res.data.price)
            })
    }
    let p=.3
    return (
        <div id="space">
            <h1><em>Dogecoin Price Tracker</em></h1>
            <div>
            <h1 id="price">{price}</h1>
            <button class="launch-button">To the Moon!</button>  
            <img id="doge" style={{bottom: (p*100-15)+"vh", left: (p*100-20)+"vw"}}
            src={dogerocketboi} alt="dogerocketboi.png" ></img>
            </div>
            <div id="moon">
            <img src={moon} alt="moon.png" width="275vw"></img>
            </div>
        </div>
        
    );
}