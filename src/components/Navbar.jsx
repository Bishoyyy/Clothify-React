import React from "react";
import { assets } from "../assets/assets.js";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = React.useState(false);
  const { theme, setShowSearch, showSearch, getCartCount } =
    React.useContext(ShopContext);
  const location = useLocation();

  // Dynamic classnames for theme
  const textColor = theme === "dark" ? "text-white" : "text-gray-700";
  const iconColor = theme === "dark" ? "filter invert" : "";

  return (
    <div
      className={`flex items-center justify-between py-5 font-medium ${textColor}`}
    >
      <NavLink
        to="/"
        className="flex flex-col items-center gap-1 text-[1.125em]"
      >
        <p>CLOTHIFY</p>
        <hr
          className={`w-2/4 border-none h-[0.09375em] ${
            theme === "dark" ? "bg-white" : "bg-gray-700"
          }`}
        />
      </NavLink>

      <ul className="hidden sm:flex gap-5 text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${textColor} ${
              isActive ? "underline" : ""
            }`
          }
        >
          <p>HOME</p>
        </NavLink>
        <NavLink
          to="/collection"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${textColor} ${
              isActive ? "underline" : ""
            }`
          }
        >
          <p>COLLECTION</p>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${textColor} ${
              isActive ? "underline" : ""
            }`
          }
        >
          <p>ABOUT</p>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${textColor} ${
              isActive ? "underline" : ""
            }`
          }
        >
          <p>CONTACT</p>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        {location.pathname === "/collection" && (
          <img
            src={assets.search_icon}
            className={`w-5 min-w-5 cursor-pointer ${iconColor}`}
            onClick={() => setShowSearch(!showSearch)}
            alt="search icon"
          />
        )}
        <div className="group relative">
          <Link to="/login">
            <img
              src={assets.profile_icon}
              className={`w-5 min-w-5 cursor-pointer ${iconColor}`}
              alt="profile icon"
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div
              className={`flex flex-col items-center gap-2 w-36 py-2  text-gray-500 rounded ${
                theme === "dark" ? "bg-gray-800" : "bg-slate-100"
              }`}
            >
              <Link to="/login"><p className="cursor-pointer hover:text-black">My Profile</p></Link>
              <Link to="/orders"><p className="cursor-pointer hover:text-black">Orders</p></Link>
              <Link to="/login"><p className="cursor-pointer hover:text-black">Logout</p></Link>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className={`w-5 min-w-5 cursor-pointer ${iconColor}`}
            alt="cart icon"
          />
          <p className="absolute right-[-0.313rem] bottom-[-0.313rem] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[0.5rem]">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className={`w-5 min-w-5 cursor-pointer sm:hidden ${iconColor}`}
          alt="menu icon"
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden transition-all ${
          visible ? "w-full" : "w-0"
        } ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      >
        <div className={`sidebar-menu flex flex-col ${textColor}`}>
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              className={`h-4 rotate-180 ${iconColor}`}
              alt="dropdown icon"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border text-center"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border text-center"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border text-center"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border text-center"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

