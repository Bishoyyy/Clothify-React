import React from "react"
import { assets } from "../assets/assets"
import Title from "../components/Title"
import NewsletterBox from "../components/NewsletterBox"
import { ShopContext } from "../context/ShopContext"
const Contact = () => {

  const {theme } = React.useContext(ShopContext);
  return (
    <div>

      <div className="text-center text-lg pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"}/>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} alt="contact us image" className="w-full md:max-w-[480px]"/>
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semi-bold text-lg">Our Store</p>
          <p className="text-gray-500">54709 Willms Station<br/>Suite 350, Washington, USA</p>
          <p className="text-gray-500">Phone Number : +201221335111 <br /> Email : bishoybassemsamir@hotmail.com</p>
          <p className="font-semibold text-lg">Careers at Clothify</p>
          <p className="text-gray-500">Learn more about our teams and job openings</p>
        <button className={`${theme === "light" ? "bg-black text-white hover:bg-white hover:text-black" : "bg-white text-black hover:bg-black hover:text-white"} border rounded px-8 py-4 text-sm transition-all duration-300`}>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact