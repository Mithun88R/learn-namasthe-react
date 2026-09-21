import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { restaurants } = props;
  const { name, locality, costForTwo, cuisines, avgRating, cloudinaryImageId } =
    restaurants.info;
  return (
    <div
      className="border border-[#0c0c0c] w-50 h-auto m-1.25 p-1.25 shadow-[0_0_10px_#0c0c0c]
    flex
    flex-col
    box-border
    no-underline
    text-inherit rounded-xl hover:bg-gray-200"
    >
      <img
        className="rounded-xl"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant"
      />
      <h3 className="font-bold text-md p-2">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{locality}</p>
      <p className="font-stretch-50%">{costForTwo}</p>
      <p>Rating: {avgRating}</p>
    </div>
  );
};

export default RestaurantCard;
