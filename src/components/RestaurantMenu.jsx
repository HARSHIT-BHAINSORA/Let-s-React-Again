import axios from "axios";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_ITEMS } from "../utils/constant";

const RestaurantMenu = () => {
  const [res, setRes] = useState(null);

  const { resid } = useParams();
  console.log(resid);

  const fetchData = async () => {
    const response = await axios.get(MENU_ITEMS + resid);
    console.log(response);
    setRes(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (res === null) return <Shimmer />;

  const { name, city, cuisines } = res?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    res?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <p>{city}</p>
      <p>{cuisines?.join(",")}</p>
      <ul>
        {itemCards?.map((it) => (
          <li key={it?.card?.info?.id}>{it?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
