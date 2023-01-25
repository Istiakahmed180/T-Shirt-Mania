import React from "react";

const Cart = ({ cart, handleRemoveCart }) => {
  return (
    <div>
      <h1 className="mb-10 text-center text-2xl font-bold">
        {cart.length === 0 ? "Cart is Empty" : <>Cart Items: {cart.length}</>}
      </h1>
      <div>
        {cart.map((tshirt, i) => (
          <div className="flex items-center my-5" key={tshirt._id}>
            <span className="mr-4 font-bold">{i + 1}. </span>
            <div className="flex  items-center">
              <img className="w-12  mr-3" src={tshirt.picture} alt="" />
              <div className="flex justify-between w-[250px]">
                <p className="text-center font-semibold">{tshirt.name}</p>
                <button
                  onClick={() => handleRemoveCart(tshirt)}
                  className="btn btn-circle btn-outline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
