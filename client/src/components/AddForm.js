import React from "react"

function AddForm() {
    return (
        <form class="mb-2">
            <h3>Add new product</h3>
            <div class="row">
                <div class="mb-3 col">
                    <label for="prodName" class="form-label">Product Name</label>
                    <input type="text" class="form-control" id="prodName" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3 col">
                    <label for="prodSupplier" class="form-label">Product Supplier</label>
                    <input type="text" class="form-control" id="prodSupplier" />
                </div>
                <div class="mb-3 col">
                <label for="prodPrice" class="form-label">Product Price</label>
                <input type="number" class="form-control" id="prodPrice" />
            </div>
            </div>

            <button type="submit" class="btn btn-primary w-100">Submit</button>
        </form>
    )
}

export default AddForm
