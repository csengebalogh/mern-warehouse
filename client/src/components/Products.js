import React from "react"
import Product from './Product'

function Products (props) {
    const { children } = props
    return (
        <>
            <h1>Products</h1>
            <Product name="Chip" supplier="IBM" price="12344"/>
            <Product name="CPU" supplier="IBM" price="1252344"/>
            <Product name="RAM" supplier="IBM" price="1265414"/>
        </>

    )
}

export default Products