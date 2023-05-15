const CartItem = ({ product, cartProducts, handleRemoveFromCart }) => {
    
  return (
    <div className="cart-item">
      <div className="cart-item--row">
        <img src={product.thumbnails[0]} alt="product" />
        <div>
          <p>
            {product.state} {product.name}
          </p>
          <p>{product.priceAfterDiscount}</p>
        </div>
        <button onClick={handleRemoveFromCart} className="delete">
          <span className="sr-only">Delete</span>
        </button>
      </div>
      <button className="btn-checkout">Checkout</button>
    </div>
  );
};

export default CartItem;
