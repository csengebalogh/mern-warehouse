import React, {useState, useEffect} from "react"
import { Button, Modal } from 'react-bootstrap'
import { BsFillPencilFill} from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { updateProduct } from "../actions/products"


function Product({ product, currentId, setCurrentId}) {
    const [productData, setProductData] = useState({
        name: '',
        supplier: '',
        price: 0
    })

    const fetchedProduct = useSelector((state) => currentId ? state.products.find((p) => p._id === currentId) : null)

    useEffect(() => {
      if (fetchedProduct) { // exists
        setProductData(fetchedProduct)
      }
    }, [fetchedProduct])
    
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleSubmit = (e) => {
        e.preventDefault()

        // if(currentId) {
        //   dispatch(updateProduct(currentId, productData))
        //   console.log("updated")
        // } else {
        //   dispatch(createProduct(productData))
        //   console.log("created")

        // }
        if (!currentId) {
            dispatch(updateProduct(currentId, productData))
        console.log("updated this", currentId)
        }

        handleClose()
    }


    // onclick
    // (e) => setProductData({...productData, supplier: e.target.value})
    //             value={productData.supplier}


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
                <Button variant="secondary" onClick={handleShow}><BsFillPencilFill />
                </Button>
            </td>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="mb-2" noValidate >
<div className="row">
    <div className="mb-3 col">
        <label htmlFor="prodName" className="form-label">Product Name</label>
        <input 
            type="text" 
            className="form-control" 
            id="prodName"
            onChange={(e) => setProductData({...productData, name: e.target.value})}
            value={productData.name}
            />
    </div>
    <div className="mb-3 col">
        <label htmlFor="prodSupplier" className="form-label">Product Supplier</label>
        <input 
            type="text" 
            className="form-control" 
            id="prodSupplier"
            onChange={(e) => setProductData({...productData, supplier: e.target.value})}
            value={productData.supplier}
            />
    </div>
    <div className="mb-3 col">
        <label htmlFor="prodPrice" className="form-label">Product Price</label>
        <input 
            type="number" 
            className="form-control" 
            id="prodPrice"
            onChange={(e) => setProductData({...productData, price: e.target.value})}
            value={productData.price}
            />
</div>

</div>

 </form> 
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={handleClose} className="btn btn-secondary w-70"
variant="secondary" >
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} className="btn btn-primary w-70">
            Edit Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
        
    )
}

export default Product
