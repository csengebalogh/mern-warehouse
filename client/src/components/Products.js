import React from "react"
import Product from './Product'

import { useSelector } from 'react-redux'

function Products({ setCurrentId }) {

    const products = useSelector((state) => state.products)

    if (!products.length) {
        return (
        <tbody>
            <tr><td>Nincs itt semmi</td></tr>
        </tbody>
        )
    } else {
        return (
            <tbody>
                {products.map((product) => (
                    <tr key={product._id}>
                        <Product product={product} setCurrentId={setCurrentId}/>
                    </tr>
                ))}
            </tbody>
        )

        
    }

}

export default Products
