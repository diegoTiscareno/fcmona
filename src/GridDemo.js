import {
  Grid
} from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import React, { useState } from "react";
import ResizeObserver from "react-resize-observer";


const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

// eslint-disable-next-line react/prop-types
function GridDemo({ onGifClick }) {
  const fetchGifs = (offset) =>
    giphyFetch.search("birthday", { offset, limit: 10 });
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerWidth);
  return (
    <>
      <Grid
        onGifClick={onGifClick}
        fetchGifs={fetchGifs}
        width={width}
        columns={3}
        gutter={6}
      />
      <div className="overlay" style={{
        width: width,
        height: height,
        backgroundColor: "#282c34",
        position: "fixed",
        opacity: "85%",
        top: 0,
        left: 0
        }}>
          <p className="tex">Feliz Cumpleaños moña</p>
        </div>
      <ResizeObserver
        onResize={(rect) => {
          setWidth(rect.width);
          setHeight(rect.height);
        }}
      />
    </>
  );
}

export default GridDemo;