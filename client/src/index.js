import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import LayOut from "./HOC/layOut";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./styles/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LayOut />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
