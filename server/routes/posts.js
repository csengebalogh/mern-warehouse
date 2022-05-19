import express from "express"

import { getData, createProduct, updateProduct } from "../controllers/posts.js"

const router = express.Router()

router.get('/', getData)
router.post('/', createProduct)
router.patch('/:id', updateProduct)

export default router
