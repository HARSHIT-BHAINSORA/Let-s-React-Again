import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.jsx";
import "./Body.css";
import { DATA_URL } from "../utils/constant.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

const Body = () => {
  const [List, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(DATA_URL);
    console.log(response);
    console.log(
      response.data.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants
    );
    setList(
      response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
    setFilterList(
      response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
  };

  const buttonHandler = () => {
    const filteredList = List.filter((res) => {
      return res.info.avgRating > 4.3;
    });
    setFilterList(filteredList);
  };
  console.log(filterList.length);

  return List?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-component">
      <div className="btn-component">
        <div className="search-component">
          <input
            className="search-bar"
            placeholder="what you want to eat?"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <span>
            <button
              className="search-btn"
              onClick={() => {
                console.log(searchText);

                const filteredList = List.filter((it) => {
                  return it.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });

                setFilterList(filteredList);
              }}
            >
              Search
            </button>
          </span>
        </div>
        <div className="filter-btn-component">
          <button className="filter-btn" onClick={buttonHandler}>
            rating more than 4.3
          </button>
        </div>
      </div>

      <div className="card-component">
        {filterList?.map((it) => (
          <Link
            className="Card-link"
            key={it.info.id}
            to={`/restaurants/${it.info.id}`}
          >
            <Card {...it.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
