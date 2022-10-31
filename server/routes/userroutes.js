import express from 'express'
import { createUser, purchaseDetail, purchaseProduct } from '../controler/usercontroler.js'

const router = express.Router()

router.post('/',createUser)
router.post('/purchase',purchaseProduct)
router.get('/purchasedetails',purchaseDetail)

export default router

