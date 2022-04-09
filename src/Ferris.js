/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";

import "./App.css";
import cleo from './cleo.jpeg';
import gris from './gris.jpeg';
import hochi from './hochi.jpeg';
import oso from './oso.jpeg';
import tom from './tom.jpeg';

export default function Ferris() {
  const graph = useRef(null);

  useEffect(() => {
    const ciclegraph = graph.current;
    const circleElements = ciclegraph.childNodes;

    let angle = 360 - 90;
    let dangle = 360 / circleElements.length;

    for (let i = 0; i < circleElements.length; i++) {
      let circle = circleElements[i];
      angle += dangle;
      circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth /
        2}px)`;
    }
  }, []);

  return (
    <div className="Ferris">
      <div className="ciclegraph" ref={graph}>
        <div className="circle"><img src={cleo} className="App-logo" /></div>
        <div className="circle"><img src={gris} className="App-logo" /></div>
        <div className="circle"><img src={hochi} className="App-logo" /></div>
        <div className="circle"><img src={oso} className="App-logo" /></div>
        <div className="circle"><img src={tom} className="App-logo" /></div>
      </div>
    </div>
  );
}