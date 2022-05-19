import React, { useEffect } from "react"
import Product from './Product'

import { useSelector } from 'react-redux'

function Products({currentId, setCurrentId }) {

    let products = useSelector((state) => state.products)

    useEffect(() => {
        console.log("fut a products")
    }, [])

    if (!products.length) {
        console.log("A tömb ures")
        return (
            <tbody>
                <tr>
                    <td>
                        Nincs semmim
                    </td>
                </tr>
            </tbody>
        )
    } else {
        console.log("a tömb", products)
        return (
            <tbody>
                {products.map((product) => (
                    <tr key={product._id}>
                        <Product product={product} currentId={product._id} setCurrentId={setCurrentId}/>
                    </tr>
                ))}
            </tbody>
        )
    }

}


export default Products
