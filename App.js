import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => (
  <div>
    <Header />
    <Body />
  </div>
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
