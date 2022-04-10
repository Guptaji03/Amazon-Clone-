import axios from 'axios'
import React, {  useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from "../Css/Productall.module.css"
import Product from './Product'
const Productall = ({obj}) => {
   const {name} =useParams()
   
    const [data,setData]=useState([])
 
  let products= data.filter((ele)=>ele.category===name)
  
    useLayoutEffect(()=>{
      axios.get("http://localhost:8000/products").then((data)=>{ console.log(data.data); setData(data.data.products)})
    },[])

  return (
    <>
    <img src="https://digiforum.space/wp-content/uploads/2021/08/Amazon-Easy-Store.jpg" alt="img"  className={style.image}/>
    
    <div className={style.main}>
    
      <div className={style.left}>
       
      </div>
      <div className={style.right}>
      {
          products.map((ele)=>{
            return <Product obj={ele} className={style.product} key={ele._id}/>
          })
        }
         
      </div>
    
    </div>
    </>
  )
}

export default Productall
