import "./Card.css";
import { CDN_LINK } from "../utils/constant";

const Card = ({ name, cloudinaryImageId, costForTwo, avgRating }) => (
  <div className="card">
    <img className="card-image" src={CDN_LINK + cloudinaryImageId} />
    <h3>{name} </h3>
    <h3>{costForTwo}</h3>
    <h3>{avgRating}</h3>
  </div>
);

export default Card;
