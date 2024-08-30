import React from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = React.useContext(ShopContext);
  const bestSellers = React.useMemo(() => {
    return products.filter((item) => item.bestseller).slice(0, 5);
  }, [products]);

  return (
  <div className="my-10">
    <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"}/>  
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            These are our best selling products.
        </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
            bestSellers.map((item, index) => (
                <ProductItem
                    key={index}
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                />
            ))
        }
    </div>

  </div>
)
};

export default BestSeller;
