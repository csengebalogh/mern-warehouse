import postProduct from '../models/postProduct.js'

export const getData = async (req, res) => {
    try {
      const postProducts = await postProduct.find()

      console.log(postProducts)

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

    res.status(200).json(newProduct)
  } catch (error) {
    res.status(409).json({ message: error.message})
  }
}