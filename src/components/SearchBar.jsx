import React from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch, theme } =
    React.useContext(ShopContext);
  const [visibile, setVisible] = React.useState(false);
  const iconColor = theme === "dark" ? "filter invert" : "";
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/collection") {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visibile ? (
    <div className="text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <img
          src={assets.search_icon}
          alt="search icon"
          className={`${iconColor} w-4`}
        />
      </div>
      <img
        src={assets.cross_icon}
        alt="cross icon"
        className={`inline w-3 cursor-pointer ${iconColor}`}
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};

export default Searchbar;
