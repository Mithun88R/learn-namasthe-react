import { useState, useEffect } from "react";
import { RESTAURANT_LIST_API } from "./constants";

const useRestaurantData = () => {
  const [restaurantLists, setRestaurantLists] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RESTAURANT_LIST_API);
    const json = await response.json();
    console.log(json);

    setRestaurantLists(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [],
    );
  };
  return {
    restaurantLists,
  };
};

export default useRestaurantData;
