import { useState } from "react";
import Card from "./Card.jsx";
import "./Body.css";
import data from "../utils/card_data.js";

const Body = () => {
  const [List, setList] = useState(data);

  console.log(List);

  const buttonHandler = () => {
    const filteredList = List.filter((res) => {
      return res.info.avgRating > 4.3;
    });
    setList(filteredList);
  };

  return (
    <div className="body-component">
      <div className="search-component">
        <input
          className="search-bar"
          placeholder="what you want to eat?"
        ></input>
        <span>
          <button onClick={buttonHandler}>rating more than 4.3</button>
        </span>
      </div>

      <div className="card-component">
        {List.map((it) => (
          <Card key={it.info.id} {...it.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
