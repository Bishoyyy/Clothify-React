import ThemeToggleButton from "./ThemeToggleButton";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-15 text-sm">
        <div>
          <p className="text-xl font-medium mb-5">CLOTHIFY</p>
          <p className="w-full md:w-2/3 text-gray-600">
            Clothify was founded in 2024 with the mission to revolutionize the
            fashion industry. Our innovative approach combines cutting-edge
            technology with a curated selection of trendsetting apparel and
            accessories. We have over 10 stores all over the United States, so
            you can shop online & in-store.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+201221335111</li>
            <li>contact@clothify.com</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center relative">
        <div className="absolute left-0">
          <ThemeToggleButton/>
        </div>
        <p className="py-4 text-sm text-center">
          © Copyrights 2024 @ CLOTHIFY - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
