const ProductInfo = ({state, name, company, description}) => {
    return (
        <div>
            <p className="clr-orange fs-200">{company}</p>
            <h1 className="fw-bold fs-700">{state}</h1>
            <h2 className="fw-bold fs-700 flow-under">{name}</h2>
            <p className="clr-dark-grayish-blue">{description}</p>
        </div>
    )
}

export default ProductInfo