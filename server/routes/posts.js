import express from "express"

import { getData, createProduct, updateProduct, deleteProduct } from "../controllers/posts.js"

const router = express.Router()

router.get('/', getData)
router.post('/', createProduct)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router
