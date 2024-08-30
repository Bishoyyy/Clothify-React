import React from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { cartItems, currency, products, updateQuantity, theme, navigate } =
    React.useContext(ShopContext);
  const [cartData, setCartData] = React.useState([]);
  const iconColor = theme === "dark" ? "filter invert" : "";

  React.useEffect(() => {
    const cartData = Object.entries(cartItems).flatMap(([id, sizes]) =>
      Object.entries(sizes)
        .filter(([size, quantity]) => quantity > 0)
        .map(([size, quantity]) => ({
          _id: id,
          size,
          quantity,
        }))
    );
    setCartData(cartData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14 min-h-screen">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      {cartData.length > 0 ? (
        <div>
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );

            return (
              <div
                key={index}
                className="py-4 border-t border-b flex flex-wrap items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    src={productData.image[0]}
                    alt="product image"
                    className="w-16 sm:w-20"
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p className="text-sm">
                        {currency}
                        {productData.price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 border text-sm">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 ml-auto">
                  <input
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                    onChange={(e) =>
                      e.target.value === "" || e.target.value === "0"
                        ? null
                        : updateQuantity(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          )
                    }
                    className="border max-w-10 sm:max-w-12 px-1 sm:px-2 py-1 text-center text-black"
                  />
                  <img
                    src={assets.bin_icon}
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    alt="bin icon"
                    className={`w-4 mr-4 sm:w-5 cursor-pointer ${iconColor}`}
                  />
                </div>
              </div>
            );
          })}

          <div className="flex justify-center my-20">
            <div className="w-full sm:w-[450px]">
              <CartTotal />
              <div className="w-full text-center">
                <button
                  className={`${
                    theme === "light"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } text-sm my-8 px-8 py-3 rounded`}
                  onClick={() => navigate("/place-order")}
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Centered Message when Cart is Empty
        <div className="flex items-center justify-center h-[50vh] text-xl">
          <p>Add items to the cart</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
