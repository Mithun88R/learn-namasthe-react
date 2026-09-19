import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantMenuData, setRestaurantMenuData] = useState([]);
  const { restaurantId } = useParams();

  useEffect(() => {
    fetchRestaurantMenuData();
    // Fetch restaurant menu data based on the restaurant ID from the URL
  }, []);

  const fetchRestaurantMenuData = async () => {
    const menuData = await fetch(
      RESTAURANT_MENU_API + restaurantId, // Replace with the actual API endpoint
    );
    // console.log("Restaurant Menu Data Response:", menuData);

    const menuDataJson = await menuData.json();
    // console.log("Restaurant Menu Data:", menuDataJson);
    setRestaurantMenuData(menuDataJson);
    // You can set the fetched data to state and render it in the component
  };

  if (restaurantMenuData.length === 0) return <Shimmer />;

  const { name, locality, costForTwoMessage, cuisines, avgRating } =
    restaurantMenuData?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restaurantMenuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards[1]?.card?.card;

  // Assuming the restaurant ID is available in the fetched data
  // Fetch restaurant menu data from an API or database
  // You can use the restaurant ID from the URL to fetch specific data

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <p>{cuisines?.join(", ")}</p>
      <p>{locality}</p>
      <p>Cost for Two: {costForTwoMessage}</p>
      <p>Rating: {avgRating}</p>
      <h2>Restaurant Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - ₹
            {(item?.card?.info?.finalPrice ??
              item?.card?.info?.price ??
              item?.card?.info?.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
