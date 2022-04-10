const Cart = require("../model/cartModel")
const router = require('express').Router()

// create cart

router.get("/" , async (req,res)=>{
  try { 
       const carts = await Cart.find()
       res.status(200).json({
        success: true,
        carts
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
       const carts = await Cart.create(req.body)
       res.status(200).json({
        success: true,
        carts
    })
      
  } catch (error) {
    res.status(404).json({
        success: false,
        message: error.message
        
    })
  }
  
   
})

router.delete("/:id", async (req,res)=>{
  try {
      const cart = await Cart.findByIdAndDelete(req.params.id)
      res.status(200).json("deleted successfully")
  } catch (error) {
   res.status(400).json((error.message))
  }
})




module.exports = router


