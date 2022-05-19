import mongoose from 'mongoose'
import postProduct from '../models/postProduct.js'

export const getData = async (req, res) => {
    try {
      const postProducts = await postProduct.find()

      res.status(200).json(postProducts)
    } catch (error) {
      res.status(404).json({ message: error.message})
    }
  }

export const createProduct = async (req, res) => {
  const product = req.body

  const newProduct = new postProduct(product)
  try {
    await newProduct.save()

    res.status(201).json(newProduct)
  } catch (error) {
    res.status(409).json({ message: error.message})
  }
}

export const updateProduct = async (req, res) => {
  const { id: _id } = req.params

  const product = req.body

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No id found")
  }

  const updatedProduct = await postProduct.findByIdAndUpdate(_id, { ...product, _id}, { new: true})

  res.json(updatedProduct)
}