import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link, Router } from "react-router-dom";

import About from "./About";
import NavBar from "./NavBar";
import history from './History';

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <NavBar>
                    </NavBar>
                </div>
            </Router>
        )
    }
}

export default Routes;

