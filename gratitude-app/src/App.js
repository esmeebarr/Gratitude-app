import logo from './logo.svg';
import './App.css';

import "./App.css";
import React from "react";
import Navigation from "../src/components/Navigation/Navigation"
import Routes from "../src/containers/Routes/Routes"
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
    <Navigation />
    <Routes />
    </Router>
    </div>
  );
}

export default App;
