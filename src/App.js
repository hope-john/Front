import React from 'react';
import './App.css';
import MainView from './components/MainView';
import Stock from './Stock';
import {Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Stock></Stock>
      <MainView />
      <Link to="/Result"><button className = 'preBut'>
              Predict Result
            </button>
            </Link>
    </div>
  );
}

export default App;
