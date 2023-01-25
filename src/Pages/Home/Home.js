import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Product/Cart/Cart";
import Product from "../Product/Product";

const Home = () => {
  const products = useLoaderData();

  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    setCart([...cart, tshirt]);
  };

  return (
    <div className=" bg-gray-100 pt-20">
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        {/* Products Here */}
        <div className="rounded-lg md:w-2/3 space-y-5">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>

        {/* cart Hero */}
        <div className="mt-6 h-full lg:h-[32rem] rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 sticky top-24">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
