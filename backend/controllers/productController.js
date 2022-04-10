const Product = require("../model/productModel")
const router = require('express').Router()

// create Product

router.get("/" , async (req,res)=>{
  try { 
       const products = await Product.find()
       res.status(200).json({
        success: true,
        products
    })
      
  } catch (error) {
    res.status(404).json({
        success: false,
        message: error.message
        
    })
  }
  
   
})


router.post("/" , async (req,res)=>{
  try { 
       const products = await Product.create(req.body)
       res.status(200).json({
        success: true,
        products
    })
      
  } catch (error) {
    res.status(404).json({
        success: false,
        message: error.message
        
    })
  }
  
   
})



module.exports = router


