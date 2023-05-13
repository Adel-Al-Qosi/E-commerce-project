import React from "react";
import "../index.css";

const Cart = ({ isVisible, cartProducts, setCartProducts }) => {

  
  return (
    <div className={`cart-container ${isVisible ? "visible" : ""}`}>
      <div className="cart-header">
        <h2 className="cart-word">Cart</h2>
      </div>
      <div className="cart-body">
        {
          /*cart stuff here*/
        }
        <p>your cart is empty</p>
      </div>
    </div>
  );
};

export default Cart;
