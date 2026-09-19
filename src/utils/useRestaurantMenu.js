import { useEffect, useState } from "react";

import { RESTAURANT_MENU_API } from "./constants";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantMenuData, setRestaurantMenuData] = useState(null);

  useEffect(() => {
    fetchRestaurantMenuData();
  }, []);

  const fetchRestaurantMenuData = async () => {
    const menuData = await fetch(RESTAURANT_MENU_API + restaurantId);
    // console.log("Restaurant Menu Data Response:", menuData);

    const menuDataJson = await menuData.json();
    console.log("Restaurant Menu Data:", menuDataJson);
    setRestaurantMenuData(menuDataJson);
    // You can set the fetched data to state and render it in the component

    console.log("restaurantMenuData", restaurantMenuData);
  };

  return restaurantMenuData;
};

export default useRestaurantMenu;
