import React from "react"

function AddForm() {
    return (
        <form className="mb-2">
            <h3>Add new product</h3>
            <div className="row">
                <div className="mb-3 col">
                    <label htmlFor="prodName" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="prodName" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 col">
                    <label htmlFor="prodSupplier" className="form-label">Product Supplier</label>
                    <input type="text" className="form-control" id="prodSupplier" />
                </div>
                <div className="mb-3 col">
                <label htmlFor="prodPrice" className="form-label">Product Price</label>
                <input type="number" className="form-control" id="prodPrice" />
            </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
    )
}

export default AddForm
