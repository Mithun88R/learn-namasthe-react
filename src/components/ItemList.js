import { CDN_URL } from "../utils/constants";

const ItemList = ({ itemData }) => {
  console.log("itemData", itemData);
  return (
    <div className="w-10/12 m-3 p-2 shadow-lg">
      <div>
        <p>{itemData?.isVeg ? "🟢" : "🔴"}</p>
      </div>
      <div className="flex justify-between">
        <span>{itemData?.name}</span>
        <p>{"Rs. " + itemData?.price / 100}</p>
        <img
          className="w-12 h-12 rounded-lg"
          src={CDN_URL + itemData?.imageId}
          alt=""
        />
      </div>
    </div>
  );
};

export default ItemList;
