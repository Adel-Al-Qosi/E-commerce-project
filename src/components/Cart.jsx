import React from "react";
import "../index.css";

const Cart = ({ isVisible, cartProducts}) => {

  
  return (
    <div className={`cart-container ${isVisible ? "visible" : ""}`}>
      <div className="cart-header">
        <h2 className="cart-word">Cart</h2>
      </div>
      <div className="cart-body">
        {
          cartProducts.length === 0 ? <p>your cart is empty</p> : cartProducts.map(product => <p>{product.name}</p>)
        }
        
      </div>
    </div>
  );
};

export default Cart;
