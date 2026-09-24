import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);
  return (
    <div className=" pt-2.5 pr-5 flex justify-between border border-solid border-[#0c0c0c]">
      <div className="border border-solid ">
        <img className="w-46" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-6 m-6 gap-5">
          <li>OnlineStatus: {onlineStatus ? "✅ Online" : "🔴 Offline"}</li>
          <li>
            <Link className="hover:text-blue-500" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" to="/aboutus">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" to="/contactus">
              Contact
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" to="/cart">
              Cart
            </Link>
          </li>
          <button
            className="px-3 py-0.5 m-0.5 bg-gray-400  hover:bg-gray-200  cursor-pointer"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="font-bold">{data.loggedInUSer}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
