import { Link } from "react-router-dom";
import RestaurantCard, { withVegRestaurants } from "./RestaurantCard";
//import restaurantList from "../utils/mocData";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_API } from "../utils/constants";

import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const [restaurantLists, setRestaurantLists] = useState([]);
  const [filteredRestaurantLists, setFilteredRestaurantLists] = useState([]);

  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RESTAURANT_LIST_API);
    const json = await response.json();
    console.log(json);

    console.log(
      "Restaurant List",
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );

    setRestaurantLists(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [],
    );
    setFilteredRestaurantLists(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [],
    );
  };

  console.log("restaurantLists", restaurantLists);

  if (!onlineStatus) {
    return (
      <h1 className="text-red-500 text-center mt-10 ">
        {" "}
        You are offline. Please check your internet connection.{" "}
      </h1>
    );
  }
  const VegRestaurantCards = withVegRestaurants(RestaurantCard);
  return restaurantLists.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="m-2 p-2 items-center flex justify-center">
        <input
          type="text"
          className="border m-4 py-0.4 border-solid border-black w-55"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-3 py-0.5 m-2 bg-gray-400 cursor-pointer hover:bg-gray-200 rounded-full"
          onClick={() => {
            setFilteredRestaurantLists(
              restaurantLists.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()),
              ),
            );
          }}
        >
          Search
        </button>
        <button
          className="px-3 py-0.5 m-2 bg-gray-400  cursor-pointer hover:bg-gray-200 rounded-full"
          onClick={() => {
            setFilteredRestaurantLists(
              restaurantLists.filter(
                (restaurant) => restaurant.info.avgRating > 4.5,
              ),
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-row flex-wrap ">
        {filteredRestaurantLists.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.info.id}`}
            key={restaurant.info.id}
            className="restaurant-link"
          >
            {restaurant.info.veg ? (
              <VegRestaurantCards restaurants={restaurant} />
            ) : (
              <RestaurantCard restaurants={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
