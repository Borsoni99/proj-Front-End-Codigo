import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Principal from "./pages/Principal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Principal />
  </StrictMode>
);
