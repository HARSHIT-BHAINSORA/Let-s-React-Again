import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { CardProvider } from "./src/components/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => (
  <div>
    <CardProvider>
      <Header />
      <Body />
    </CardProvider>
  </div>
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
