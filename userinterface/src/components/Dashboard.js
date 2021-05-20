import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Constants from './constants';
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

    return (
        <div>
            <h1 id="price">{price}</h1>
            <button class="launch-button">To the Moon!</button>

            <div class="rocket-container">
                <div class="canvas-container">
                    {/* <canvas id="rocket-canvas" height="680" width="400">
                        Doge is not supported, sorry...
                    </canvas> */}
                </div>
            </div>
        </div>
    );
}