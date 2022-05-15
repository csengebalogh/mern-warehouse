import React from "react"
import Product from './Product'

import { useSelector } from 'react-redux'

function Products() {

    const products = useSelector((state) => state.products)

    console.log("LOG", products)
    return (
        <>
            <Product name="Chip" supplier="IBM" price="12344"/>
            <Product name="CPU" supplier="IBM" price="1252344"/>
            <Product name="RAM" supplier="IBM" price="1265414"/>
        </>

    )
}

export default Products