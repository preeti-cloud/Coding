import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Routes></Routes>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the React tutorial
        </p>
      </header>
    </div>
  );
}

export default App;
