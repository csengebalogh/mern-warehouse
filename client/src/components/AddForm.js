import React, {useState} from "react"

import { useDispatch } from 'react-redux'
import { createProduct } from "../actions/products"

import { 
  Button,
  Modal
} from 'react-bootstrap'

// import FileBase from 'react-file-base64'
function AddForm() {
    const [productData, setProductData] = useState({
        name: '',
        supplier: '',
        price: 0
    })

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createProduct(productData))
    }

    const clear = () => {
    }

    return (
<>
      <Button variant="primary" onClick={handleShow}>
        Add new product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new product</Modal.Title>
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
            value={productData.name}
            onChange={(e) => setProductData({...productData, name: e.target.value})}/>
    </div>
    <div className="mb-3 col">
        <label htmlFor="prodSupplier" className="form-label">Product Supplier</label>
        <input 
            type="text" 
            className="form-control" 
            id="prodSupplier"
            value={productData.supplier}
            onChange={(e) => setProductData({...productData, supplier: e.target.value})}/>
    </div>
    <div className="mb-3 col">
        <label htmlFor="prodPrice" className="form-label">Product Price</label>
        <input 
            type="number" 
            className="form-control" 
            id="prodPrice"
            value={productData.price}
            onChange={(e) => setProductData({...productData, price: e.target.value})}/>
</div>

</div>

 </form> 
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit"     className="btn btn-secondary w-70"
variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  className="btn btn-primary w-70" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default AddForm



