import express from 'express'
import { createUser, displayOrder, purchaseProduct } from '../controler/usercontroler.js'

const router = express.Router()

router.post('/',createUser)
router.post('/purchase',purchaseProduct)

export default router

