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
  return (
    <>
      <Grid
        onGifClick={onGifClick}
        fetchGifs={fetchGifs}
        width={width}
        columns={3}
        gutter={6}
      />
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(width);
        }}
      />
    </>
  );
}

export default GridDemo;