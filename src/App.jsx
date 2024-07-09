import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homePage";
import data from "./components/data";
import { BagContext } from "./components/context/bagContext";
import CartPage from "./pages/cartPage";
import Payment from "./pages/payment";
import Delivery from "./pages/delivery";
export default function App(){
  const [allBags, setAllBags]= useState({})
  const [cart, setCart]= useState([])
  const [cartItems, setCartItems]= useState(0)
  
  useEffect(()=>{       
      data.map((bags)=>(
          setAllBags(bags)

      ))
  }, [])

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
        <BagContext.Provider value={{allBags,isAddedToCart, removeFromCart, cartItems, cart, addToCart}}>
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