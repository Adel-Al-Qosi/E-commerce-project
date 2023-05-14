const ProductInfo = ({state, name, company, description}) => {
    return (
        <div>
            <p className="clr-orange fs-200">{company}</p>
            <h1 className="fw-bold fs-700">{state}</h1>
            <h1 className="fw-bold fs-700">{name}</h1>
            <p className="clr-dark-grayish-blue">{description}</p>
        </div>
    )
}

export default ProductInfo