import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = (props) => {
  const { categoryData } = props;
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
    console.log("handle clicked");
  };
  //console.log("categoryData", categoryData);
  return (
    <div className="w-6/12 p-5 m-1 shadow-2xl  bg-gray-200">
      <div
        className="justify-between flex cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {categoryData?.title} ({categoryData?.itemCards?.length})
        </span>
        <span>🔽</span>

        {/*Header Category Name*/}

        {/* Body Accordian Category*/}
      </div>
      {showItems && (
        <div className="p-5 m-1 bg-gray-200">
          {categoryData?.itemCards.map((item) => {
            return (
              <ItemList
                key={item?.card?.info?.id}
                itemData={item?.card?.info}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
