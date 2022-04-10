const express = require('express')
const product = require("./controllers/productController") 
const category = require("./controllers/category.Controller") 
const cart = require("./controllers/cartController") 
const app = express()
const cors =require("cors")
app.use(cors())
app.use(express.json())

// route integration

app.use("/products",product)
app.use("/category",category)
app.use("/cart",cart)
module.exports = app