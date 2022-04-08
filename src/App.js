import './App.css';
import GridDemo from './GridDemo';
import React, { useState } from "react";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [modalGif, setModalGif] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <GridDemo
          onGifClick={(gif, e) => {
            console.log("gif", gif);
            e.preventDefault();
            setModalGif(gif);
          }}
        />
      </header>
    </div>
  );
}

export default App;
