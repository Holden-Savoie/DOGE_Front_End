import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes';
import * as Constants from "./components/constants";
import socketIOClient from "socket.io-client";

export default function App() {
    const [response, setResponse] = useState("");
    useEffect(() => {
        const socket = socketIOClient("http://localhost:5000/");
        socket.on("FromAPI", data => {
            setResponse(data);
        });
    }, []);
    
    return (
        <Routes 
        price={response}
        />
    );
}


