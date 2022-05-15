import React, {useState} from "react"

import FileBase from 'react-file-base64'
function AddForm() {
    const [productData, setProductData] = useState({
        name: '',
        supplier: '',
        price: 0
    })

    const handleSubmit = () => {

    }

    const clear = () => {
        
    }

    return (
        <form className="mb-2" noValidate >
            <h3>Add new product</h3>
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
            {/* <FileBase 
                type="file"
                multiple={false}
                onDone={({base64}) => setProductData({ ...productData, selectedFile: base64})}
            /> */}
            </div>

            <button 
                type="submit" 
                className="btn btn-primary w-70">Submit
            </button>
            <button 
                type="submit" 
                className="btn btn-secondary w-30"
                onClick={clear}>Clear
            </button>
        </form>
    )
}

export default AddForm
