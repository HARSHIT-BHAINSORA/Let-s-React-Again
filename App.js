import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => (
  <div>
    <h1>This is my first React interview !!!</h1>
  </div>
);

const Home = () => (
  <div>
    <Title />
    <p>Hi I am Harshit Bhainsora From Almora</p>
  </div>
);

root.render(<Home />);
