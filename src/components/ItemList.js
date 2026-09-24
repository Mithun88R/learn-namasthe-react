import { CDN_URL } from "../utils/constants";

const ItemList = ({ itemData }) => {
  console.log("itemData", itemData);
  return (
    <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between shadow-lg">
      <div className="w-9/12">
        <div className="py-2">
          <p>{itemData?.isVeg ? "🟢" : "🔴"}</p>
          <span>{itemData?.name}</span>
          <span>{" - Rs. " + itemData?.price / 100}</span>
        </div>
        <p className="text-xs">{itemData?.description}</p>
      </div>
      <div className="w-3/12 p-4">
        <div className="absolute ">
          <button className="bg-black text-white mx-8 rounded-lg m-auto p-2 absolute cursor-pointer">
            Add+
          </button>
        </div>
        <img
          className="w-full  rounded-lg"
          src={CDN_URL + itemData?.imageId}
          alt=""
        />
      </div>
    </div>
  );
};

export default ItemList;
