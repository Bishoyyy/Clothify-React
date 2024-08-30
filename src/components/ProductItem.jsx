import React from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const ProductItem = ({ id, image, name, price }) => {
  const { currency, theme } = React.useContext(ShopContext);

  ProductItem.propTypes = {
    id: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
    name: PropTypes.node.isRequired,
    price: PropTypes.node.isRequired,
  };
  return (
    <Link
      to={`/product/${id}`}
      className={`${
        theme === "light" ? "text-gray-700" : "text-white"
      } cursor-pointer`}
    >
      <div className="overflow-hidden">
        <img
          src={image[0]}
          className="hover:scale-105 transition ease-in-out"
          alt="Product Image"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
