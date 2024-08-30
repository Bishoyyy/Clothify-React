import React from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
const PlaceOrder = () => {
  const { theme, navigate } = React.useContext(ShopContext);
  const [method, setMethod] = React.useState("cod");

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/orders");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
        {/* Left Side */}
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <div className="text-lg sm:text-xl my-3">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border rounded py-1.5 px-3.5 text-black"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border rounded py-1.5 px-3.5 text-black"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded py-1.5 px-3.5 text-black"
            required
          />
          <input
            type="text"
            placeholder="Street"
            className="w-full border rounded py-1.5 px-3.5 text-black"
            required
          />
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="City"
              className="w-full border rounded py-1.5 px-3.5 text-black"
              required
            />
            <input
              type="text"
              placeholder="State"
              className="w-full border rounded py-1.5 px-3.5 text-black"
              required
            />
          </div>
          <div className="flex gap-3">
            <input
              type="number"
              placeholder="Zipcode"
              className="w-full border rounded py-1.5 px-3.5 text-black"
              required
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full border rounded py-1.5 px-3.5 text-black"
              required
            />
          </div>
          <input
            type="number"
            placeholder="Phone Number"
            className="w-full border rounded py-1.5 px-3.5 text-black"
            required
          />
        </div>

        {/* Right Side */}
        <div className="mt-8">
          <div className="mt-8 min-w-80">
            <CartTotal />
          </div>
          <div className="mt-8">
            <Title text1={"PAYMENT"} text2={"METHOD"} />
            <div className="flex gap-3 flex-col lg:flex-row">
              <div
                onClick={() => setMethod("stripe")}
                className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded"
              >
                <p
                  className={`min-w-3.5 h-3.5 border rounded-full ${
                    method === "stripe" ? "bg-green-500" : ""
                  }`}
                ></p>
                <img
                  src={assets.stripe_logo}
                  alt="stripe logo"
                  className="h-5 mx-4"
                />
              </div>
              <div
                onClick={() => setMethod("razorpay")}
                className="flex gap-3 flex-col lg:flex-row"
              >
                <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded">
                  <p
                    className={`min-w-3.5 h-3.5 border rounded-full ${
                      method === "razorpay" ? "bg-green-500" : ""
                    }`}
                  ></p>
                  <img
                    src={assets.razorpay_logo}
                    alt="razorpay logo"
                    className="h-5 mx-4"
                  />
                </div>
              </div>
              <div
                onClick={() => setMethod("cod")}
                className="flex gap-3 flex-col lg:flex-row"
              >
                <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded">
                  <p
                    className={`min-w-3.5 h-3.5 border rounded-full ${
                      method === "cod" ? "bg-green-500" : ""
                    }`}
                  ></p>
                  <p className="text-sm font-medium mx-4">CASH ON DELIVERY</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center mt-8">
              <button
                type="submit"
                className={`${
                  theme === "light"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } px-16 py-3 mt-4 text-sm rounded`}
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
