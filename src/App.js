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
            <Link to="/Top10"><button className = 'preBut'>
              Top 5 In SET 50
            </button>
            
            </Link>
    </div>
  );
}

export default App;
