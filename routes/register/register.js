const express=require('express')
const { userRegister,supplierRegister,adminRegister } = require('../../controllers/registerController')
const router=express.Router()
router.post('/user',userRegister)
router.post('/supplier',supplierRegister)
router.post('/admin',adminRegister)
module.exports=router