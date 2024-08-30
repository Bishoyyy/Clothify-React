import { assets } from "../assets/assets"
import Title from "../components/Title"
import NewsletterBox from "../components/NewsletterBox"
const About = () => {
  return (
    <div>

      <div className="text-lg text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US"/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-[450px]" alt="about us image" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4">
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that match every taste and preference. We offer an extensive collection sourced from trusted brand and suppliers with great prices and money back guarantee without any hastle.</p>
          <b>Our Mission</b>
          <p>Our mission at Clothify is to empower customers with choice, convenience and confidence, We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>

      <div className="text-lg py-4">
         <Title text1="WHY" text2="US ?"/> 
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p>With our user-friendly interface and hassle-free ordering process, Shopping has never been easier.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p>Our team of dedicated professionals is here to assist you with any questions or concerns. Ensuring your satisfaction is our top priority</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
