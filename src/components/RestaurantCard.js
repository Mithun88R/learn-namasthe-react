import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { name, locality, costForTwo, cuisines, avgRating, image } =
    props.restaurants;
  return (
    <div className="restaurant-card">
      <img src={CDN_URL + image} alt="Restaurant" />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{locality}</p>
      <p>{costForTwo}</p>
      <p>Rating: {avgRating}</p>
    </div>
  );
};

export default RestaurantCard;
