import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const restaurantMenuData = useRestaurantMenu(restaurantId);

  console.log("Response Restaurant Menu Data:", restaurantMenuData);

  if (restaurantMenuData === null) return <Shimmer />;

  const { name, locality, costForTwoMessage, cuisines, avgRating } =
    restaurantMenuData?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restaurantMenuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards[1]?.card?.card;

  // console.log(
  //   restaurantMenuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR
  //     ?.cards,
  // );

  const categoryItemCards =
    restaurantMenuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  //console.log("category", categoryItemCards);

  // Assuming the restaurant ID is available in the fetched data
  // Fetch restaurant menu data from an API or database
  // You can use the restaurant ID from the URL to fetch specific data

  return (
    <div className="p-5 m-5">
      <h1 className="font-black text-2xl ">{name}</h1>
      <p>{cuisines?.join(", ")}</p>
      <p>{locality}</p>
      <p>Cost for Two: {costForTwoMessage}</p>
      <p>Rating: {avgRating}</p>
      <h2 className="font-bold text-lg">Restaurant Menu</h2>
      {/*  category Accordian building. */}

      {categoryItemCards.map((categoryData, index) => {
        return (
          <RestaurantCategory
            key={index}
            categoryData={categoryData?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex(showIndex === index ? null : index)
            }
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
