import React from "react"

function Product({ product }) {

    return (
        <>
            <th scope="row">{product._id}</th>
            <td>{product.name}</td>
            <td>{product.supplier}</td>
            <td>{product.price}</td>
        </>
        
    )
}

export default Product
