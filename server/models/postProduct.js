import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: String,
    supplier: String,
    price: Number
})

//turn schema into model
const postProduct = mongoose.model('postProduct', productSchema)

export default postProduct
