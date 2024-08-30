import React from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Orders = () => {
  const { products, currency, cartItems } = React.useContext(ShopContext);
  let currentDate = new Date().toLocaleDateString('en-GB');

  const cartData = Object.entries(cartItems).flatMap(([id, sizes]) =>
    Object.entries(sizes)
      .filter(([size, quantity]) => quantity > 0)
      .map(([size, quantity]) => ({
        _id: id,
        size,
        quantity,
      }))
  );

  return (
    <div className='orders-container'>
      <div className="border-t pt-16">
        <div className="text-xl text-center">
          <Title text1="YOUR" text2="ORDER" />
        </div>
        <div>
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );

            return (
              <div key={index} className="py-4 border-t border-b flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className='flex items-start gap-6 text-sm'>
                  <img src={productData.image[0]} alt="product image" className='w-16 sm:w-20'/>
                  <div>
                    <p className='sm:text-base font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-3 mt-2 text-base'>
                      <p className='text-sm'>{currency}{productData.price}</p>
                      <p className='text-sm'>Quantity: {item.quantity}</p>
                      <p className='text-sm'>Size: {item.size}</p>
                    </div>
                    <p className='mt-2 text-sm'>{`Date: ${currentDate}`}</p>
                  </div>
                </div>
                <div className='md:w-1/2 flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                    <p className='text-sm md:text-base'>Ready to ship</p>
                  </div>
                  <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Orders