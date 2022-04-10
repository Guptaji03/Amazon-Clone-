const Category = require("../model/categoryModel")
const router = require('express').Router()

// create Product

router.get("/" , async (req,res)=>{
  try { 
       const category = await Category.find()
       res.status(200).json({
        success: true,
        category
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
       const category = await Category.create(req.body)
       res.status(200).json({
        success: true,
        category
    })
      
  } catch (error) {
    res.status(404).json({
        success: false,
        message: error.message
        
    })
  }
  
   
})



module.exports = router


