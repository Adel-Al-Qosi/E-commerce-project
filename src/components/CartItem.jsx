const CartItem = ({ product }) => {
  return (
    <div className="cart-item">
      <div>
        <img src={product.thumbnails[0]} alt="product" />
        <div>
          <p className="fs-200">
            {product.state} {product.name}
          </p>
          <p>{product.priceAfterDiscount}</p>
        </div>
        <button className="delete">
          <span className="sr-only">Delete</span>
        </button>
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default CartItem;
