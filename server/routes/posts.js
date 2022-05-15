import express from "express"

import { getData, createProduct } from "../controllers/posts.js"

const router = express.Router()

router.get('/', getData)
router.post('/', createProduct)

export default router