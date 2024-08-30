import React from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
const Product = () => {
  const { productId } = useParams();
  const { products, currency, theme, addToCart } = React.useContext(ShopContext);
  const [productData, setProductData] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [size, setSize] = React.useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  React.useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                onClick={() => setImage(item)}
                alt="product image"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="product image" />
          </div>
        </div>
        {/* Product Details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="star icon" className="w-3.5" />
            <img src={assets.star_icon} alt="star icon" className="w-3.5" />
            <img src={assets.star_icon} alt="star icon" className="w-3.5" />
            <img src={assets.star_icon} alt="star icon" className="w-3.5" />
            <img
              src={assets.star_dull_icon}
              alt="star icon"
              className="w-3.5"
            />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-3 text-xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-3 md:w-4/5 text-xl">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4  text-black ${
                    item === size
                      ? "bg-blue-950 text-white"
                      : "bg-gray-100 text-black"
                  } rounded`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className={`${
              theme === "light" ? "bg-black" : "bg-blue-950"
            } text-white px-8 py-3 text-sm active:bg-gray-700 rounded`}
          >
            Add To Cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Product Description & Reviews */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. it
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices and any available
            variations(e.g. sizes, colors). Each product usually has it's own
            dedicated page with relevant information of that item.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="text-xl flex justify-center items-center h-screen">
      Loading...
    </div>
  );
};

export default Product;
