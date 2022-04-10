import React from 'react'
import axios from 'axios'
import {  useLayoutEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct'
import style from "../Css/CheckoutProduct.module.css"

const Checkout = () => {
  const [data,setData]=useState([])
     console.log(data)
useLayoutEffect(()=>{
    axios.get("http://localhost:8000/cart").then((data)=>{ console.log(data.data); setData(data.data.carts)})
},[])
  return (
    <div className={style.render} >
     <div className={style.left}>
     <h1>  &nbsp;  &nbsp;  &nbsp;You Have {data.length} Product in your cart</h1>
       {
         data.map((ele)=>{
           return <CheckoutProduct obj={ele}/>
         })
       }
     
       </div> 
       <div className={style.right}>
       <h1>Cart Details </h1>  
       </div>
    </div>
  )
}

export default Checkout
