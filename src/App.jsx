import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homePage";
import data from "./components/data";
import { BagContext } from "./components/context/bagContext";
import CartPage from "./pages/cartPage";
export default function App(){
  const [allBags, setAllBags]= useState({})
  
  useEffect(()=>{       
      data.map((bags)=>(
          setAllBags(bags)
      ))
  }, [])
  return(
    <div className="app">
        <BagContext.Provider value={{allBags}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cart" element={<CartPage/>} />
            </Routes>
          </BrowserRouter>
        </BagContext.Provider>

    </div>
  )
}