import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Css/Category.css"
const Category = ({obj}) => {
  console.log(obj)
  const navigate =useNavigate()
 
  return (
    <div className="Product"  onClick={()=> navigate(`/products/${obj.name}`)}>
    
  <h1>{obj.name}</h1>

<img src={obj.image} alt="" />

</div>
  )
}

export default Category
