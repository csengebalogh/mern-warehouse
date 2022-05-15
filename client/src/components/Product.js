import React from "react"

function Product(props) {
    const {
        name, 
        supplier, 
        price
    } = props
    return (
        <tr>
        <th scope="row">1</th>
        <td>{name}</td>
        <td>{supplier}</td>
        <td>{price}</td>
        </tr>
    )
}

export default Product
