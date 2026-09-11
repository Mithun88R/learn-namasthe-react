import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mocData";

import { useState } from "react";

export const Body = () => {
  const [restaurantLists, setRestaurantLists] = useState(restaurantList);

  console.log(restaurantLists);
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurantLists(
              restaurantList.filter((restaurant) => restaurant.avgRating > 4.5),
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurants-list">
        {restaurantLists.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurants={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
