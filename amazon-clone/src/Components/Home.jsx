import React, { useEffect, useState } from 'react'
import style from "../Css/Home.module.css"
// import Product from './Product'
import axios from "axios"
import Category from './Category'
import { useDispatch } from 'react-redux'
import { getcartitems } from '../Redux/Action'
// import { useNavigate } from 'react-router-dom'
// import Footer from './Footer'

const Home = () => {
  // const navigate =useNavigate()
  const [data,setData]=useState([])
const dispatch =useDispatch()
 
  useEffect(()=>{
    axios.get("http://localhost:8000/category").then((data)=>{ console.log(data.data); setData(data.data.category)})
    axios.get("http://localhost:8000/cart").then((data)=>{ dispatch(getcartitems(data.data.carts))})
  },[])

  return (
   <>
   {data.length>0? <div className={style.Home}>
   <img src="https://digiforum.space/wp-content/uploads/2021/08/Amazon-Easy-Store.jpg" alt="img"  className={style.image}/>


   <div className={style.product}>
  {
    data.map((ele)=>{
      return <Category  key ={ele._id} obj ={ele}/>
    })
  }

   </div>

    </div> : <h1>Loading...</h1>
  }
 
  </>
  )
}

export default Home


// time 2:36min

