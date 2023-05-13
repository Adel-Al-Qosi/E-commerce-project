const ProductInfo = ({name, company, description, price, discount, priceAfterDiscount}) => {
    return (
        <div>
            <p>{company}</p>
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
            <p>{discount}</p>
            <p>{priceAfterDiscount}</p>
        </div>
    )
}

export default ProductInfo