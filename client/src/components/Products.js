import React from "react"
import Product from './Product'

import { useSelector } from 'react-redux'

function Products() {

    const products = useSelector((state) => state.products)

    console.log(products)

    //   {products.map((product) => (
    //         <tr>
    //         <Product key={product._id} product={product}/>
    //         </tr>
    //         )}

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
                        <Product product={product}/>
                    </tr>
                ))}
            </tbody>
        )

        
    }

}

export default Products
