import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
//import restaurantList from "../utils/mocData";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_API } from "../utils/constants";

import { useState, useEffect } from "react";

export const Body = () => {
  const [restaurantLists, setRestaurantLists] = useState([]);
  const [filteredRestaurantLists, setFilteredRestaurantLists] = useState([]);

  const [searchText, setSearchText] = useState("");

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
  return restaurantLists.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
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
      </div>
      <div className="filter-container">
        <button
          className="filter-btn"
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
      <div className="restaurants-list">
        {filteredRestaurantLists.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.info.id}`}
            key={restaurant.info.id}
            className="restaurant-link"
          >
            <RestaurantCard restaurants={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
