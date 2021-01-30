import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import Recipe from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Recipe />
  </StrictMode>,
  rootElement
);
