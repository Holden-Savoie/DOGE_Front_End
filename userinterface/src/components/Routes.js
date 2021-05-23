import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from './Dashboard';

export default function Routes(props) {
    return (
            <div>
                <Router>
                    <Switch style={{zIndex: "9"}}>
                        <Route path="/">
                            <Dashboard price={props.price}  />
                        </Route>
                    </Switch>
                </Router>
            </div>    
    )
}