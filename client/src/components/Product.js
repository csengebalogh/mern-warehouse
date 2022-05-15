import React from "react"
import { Button } from 'react-bootstrap'
import { BsFillPencilFill} from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'


function Product({ product }) {

    return (
        <>
            <th scope="row">{product._id}</th>
            <td>{product.name}</td>
            <td>{product.supplier}</td>
            <td>{product.price}</td>
            <td>
                <Button variant="danger">
                    <AiFillDelete />
                </Button>
            </td>
            <td>
                <Button variant="secondary">
                    <BsFillPencilFill />
                </Button>
            </td>
        </>
        
    )
}

export default Product
