import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import About from "./About";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Auth from './auth';

const auth=new Auth()

function NavBar() {
    return (
        <div className="navbar">
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button onClick={()=>{auth.login()}}>Login</button>
                    </div>
                    <ul className ="mynavBar" class="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about" >About</Link></li>
                        <Route exact path="/about" component={About} />
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;