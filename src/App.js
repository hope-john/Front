import React from 'react';
import './App.css';
import MainView from './components/MainView';
import Stock from './Stock';

function App() {
  return (
    <div className='App'>
      <Stock></Stock>
      <MainView />
    </div>
  );
}

export default App;
