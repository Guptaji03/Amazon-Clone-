import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../Css/Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useSelector } from "react-redux";

const Navbar = () => {
  const cartitems = useSelector((state)=>state.cartItems)
 console.log(cartitems)
    
  return (
    <div className={style.header}>
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className={style.logo}
          alt="Amazon logo"
        />
      </Link>
      <div className={style.search}>
        <input type="text" className={style.search_bar} />
        <SearchIcon className={style.icon} />
      </div>

      <div className={style.links}>
        <Link to="/login" className={style.link}>
          <div className={style.name}>
            <span className={style.option1}>Hello Sachin</span>
            <span className={style.option2}>Sign In</span>
          </div>
        </Link>

        <Link to="/login" className={style.link}>
          <div className={style.name}>
            <span className={style.option1}>Return</span>
            <span className={style.option2}> & Orders</span>
          </div>
        </Link>

        <Link to="/login" className={style.link}>
          <div className={style.name}>
            <span className={style.option1}>Your</span>
            <span className={style.option2}>Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className={style.link}>
          <div className={style.cart}>
            <ShoppingCartIcon />
            <span className={style.cart_count}>{cartitems.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
