import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { RhinoProvider } from "react-rhino";

import App from "./App";
import "./index.scss";

const store = {
  JWTtoken: "",
  email: "",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <RhinoProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RhinoProvider>
);
