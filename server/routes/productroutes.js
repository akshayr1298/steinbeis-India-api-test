import express from 'express'
import { createProduct } from '../controler/productcontroler.js'

const router = express.Router()

router.post('/',createProduct)

export default router
