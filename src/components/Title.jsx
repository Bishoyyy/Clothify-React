import React from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../context/ShopContext";

const Title = ({ text1, text2 }) => {
  const { theme } = React.useContext(ShopContext);
  Title.propTypes = {
    text1: PropTypes.node.isRequired,
    text2: PropTypes.node.isRequired,
  };
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className={`${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
        {text1} <span className="text-gray-700 font-medium">{text2}</span>
      </p>
      <p className="w-8 sm:w-12 h-[0.063rem] sm:h-[0.125rem] bg-gray-700"></p>
    </div>
  );
};

export default Title;
