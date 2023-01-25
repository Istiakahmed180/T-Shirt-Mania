import React from "react";

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div>
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div>
        {cart.map((tshirt, i) => (
          <div key={tshirt._id}>
            <p>
              <span>{i + 1}. </span>
              {tshirt.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
