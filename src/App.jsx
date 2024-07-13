import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homePage";
// import data from "./components/data";
import { BagContext } from "./components/context/bagContext";
import CartPage from "./pages/cartPage";
import Payment from "./pages/payment";
import Delivery from "./pages/delivery";
export default function App(){
  // const [allBags, setAllBags]= useState({})
  const [data, setData]= useState([])
  const [loading, setLoading]= useState(false)
  const [cart, setCart]= useState([])
  const [cartItems, setCartItems]= useState(0)
  const [currentPage, setCurrentPage]= useState(1)
  const Category = ["Kids Bags", "Women Bags", "Men Bags",];

async function fetchApi(){
  setLoading(true)
  
  const apiKey= import.meta.env.VITE_API_KEY;
  const appId= import.meta.env.VITE_APP_ID;
  const orgId = import.meta.env.VITE_ORG_ID;
  try{
    const response = await fetch(`https://api.timbu.cloud/products?organization_id=${orgId}&reverse_sort=true&page=${currentPage}&size=10&Appid=${appId}&Apikey=${apiKey}`)
    const data = await response.json()
    setData(data.items)
  }
  catch(error){
    console.log(error)
  }
  finally{
    setLoading(false)
}
}
useEffect(()=>{
fetchApi()
console.log(data)
console.log(currentPage)
}, [currentPage])


  const isAddedToCart = (itemId) => {
    return cart.some(item => item.id === itemId);
  };

  function addToCart(bag){
    setCart((prev)=>[...prev, bag])
    setCartItems((prev)=>prev+1)
  }


  function removeFromCart(bagId){
    const updatedCart= cart.filter((cart)=>cart.id !== bagId)
    setCart(updatedCart)
    setCartItems((prev)=>prev-1)
    
  }

  


  return(
    <div id="home" className="app">
        <BagContext.Provider value={{data, Category, loading,setCurrentPage, currentPage, isAddedToCart, removeFromCart, cartItems, cart, addToCart}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cart" element={<CartPage/>} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/delivery" element={<Delivery />} />
            </Routes>
          </BrowserRouter>
        </BagContext.Provider>

    </div>
  )
}