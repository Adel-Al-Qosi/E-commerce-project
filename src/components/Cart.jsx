import React from "react";
import "../index.css";

const Cart = ({ isVisible }) => {
  return (
    <div className={`cart-container ${isVisible ? "visible" : ""}`}>
      <div className="cart-header">
        <h2 className="cart-word">Cart</h2>
      </div>
      <div className="cart-body">
        {/* cart items here (maybe) */}
        <p>Your cart is empty.</p>
      </div>
    </div>
  );
};

export default Cart;
