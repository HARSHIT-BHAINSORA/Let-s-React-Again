import "./Card.css";
import { CDN_LINK } from "../utils/constant";
import { useContext } from "react";
import { CardContext } from "./Context";

const Card = ({ name, cloudinaryImageId, costForTwo, avgRating }) => {
  const { addItemHandler } = useContext(CardContext);
  return (
    <div className="card">
      <img className="card-image" src={CDN_LINK + cloudinaryImageId} />
      <h5>{name} </h5>
      <h4>{costForTwo}</h4>
      <p>{avgRating}</p>
      <button className="cart-btn" onClick={addItemHandler}>
        Add to cart
      </button>
    </div>
  );
};

export default Card;
