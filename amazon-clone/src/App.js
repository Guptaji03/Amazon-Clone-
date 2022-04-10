import React from "react";
import "./App.css";
import {  Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
// import Product from "./Components/Product";
import Footer from "./Components/Footer";
import Productall from "./Components/Productall";
// import CheckoutProduct from "./Components/CheckoutProduct";
import Checkout from "./Components/Checkout";

function App() {
  return (
  <>
       <Navbar/>
      <div className="App">
       
        <Routes>
         
          <Route path="/" element={ <Home/> }/>
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/login" element={ <h1>Login page</h1>} />
          <Route path="/products/:name" element={ <Productall/>} />

            
        </Routes>
      </div>
  <Footer/>
  </>
  );
}

export default App;
