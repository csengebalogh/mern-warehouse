import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: String,
    supplier: String,
    price: Number
})

//turn schema to model

const postProduct = mongoose.model('postProduct', productSchema)

export default postProduct
