import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import style from "../Css/Product.module.css";
import { getcartitems } from "../Redux/Action";
const Product = ({ obj }) => {
const dispatch =useDispatch()
  let postitem = async () => {
    await axios
      .post("http://localhost:8000/cart", obj)
      .then((res) => console.log(res))
      .catch((err) => console.log(err)); 
      axios.get("http://localhost:8000/cart").then((data)=>{ dispatch(getcartitems(data.data.carts))})
  };

  return (
    <div className={style.Product}>
      <div className={style.card}>
        <h5>{obj.name}</h5>
        <p className={style.price}>
          <span>Rs.</span>
          <strong>{obj.price}</strong>
        </p>

        <div className={style.rating}>
          {Array(obj.rating)
            .fill()
            .map((ele) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={obj.image} alt="" />
      <button className={style.btn} onClick={postitem}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
