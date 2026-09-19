import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { restaurants } = props;
  const { name, locality, costForTwo, cuisines, avgRating, cloudinaryImageId } =
    restaurants.info;
  return (
    <div className="restaurant-card">
      <img src={CDN_URL + cloudinaryImageId} alt="Restaurant" />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{locality}</p>
      <p>{costForTwo}</p>
      <p>Rating: {avgRating}</p>
    </div>
  );
};

export default RestaurantCard;
