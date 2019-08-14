import React from 'react';
import logo from './logo.svg';
import './App.css';
import DrumPadComponent from './Components/DrumPad/DrumPadComponent';

function App() {
  return (
    <div className="App">
      <DrumPadComponent padType="Kick" />  
    </div>
  );
}

export default App;
