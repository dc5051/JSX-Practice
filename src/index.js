// use ES6 import now instead of require
import React from "react";
import ReactDOM from "react-dom";

// use render to render react. render can only take 1 element at a time
ReactDOM.render(
  <div>
    <h1>Hello world</h1>
    <p>what a nice paragraph</p>
  </div>,
  document.getElementById("root")
);
