/* eslint-disable no-unused-vars */
import './App.css';
import GridDemo from './GridDemo';
import Ferris from './Ferris'
import Confetti from 'react-confetti'
import React, { useState } from "react";


function App() {
  // eslint-disable-next-line no-unused-vars
  const [modalGif, setModalGif] = useState();
  return (
    <div scroll="no">
      <header className="App-header">
        <Confetti />
        <GridDemo
          onGifClick={(gif, e) => {
          }}
        />
        <Ferris />
      </header>
    </div>
  );
}

export default App;
