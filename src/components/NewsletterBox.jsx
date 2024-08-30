import React from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
const NewsletterBox = () => {
  const [email, setEmail] = React.useState("");
  const { theme } = React.useContext(ShopContext);
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
        setEmail("");
        setTimeout(() => {
            toast.error("Please enter a valid email address!");
          }, 120);
    } else {
      setEmail("");
      setTimeout(() => {
        toast.success("Thank you for subscribing to our Newsletter!");
      }, 120);
    }
  };
  return (
    <div className="text-center">
      <p className={`text-xl font-medium ${theme === "light" ? "text-gray-800" : "text-white"}`}>
        Subscribe now & get 20% off on your first purchase!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto mt-4 mb-5 border pl-3"
      >
        <input
          type="text"
          placeholder="Enter your email address"
          className="w-full sm:flex-1 outline-none rounded p-[0.5em] text-black"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className={`${theme === "light" ? "bg-gray-800" : "bg-[#414141]"} text-white text-sm px-10 py-4`}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
