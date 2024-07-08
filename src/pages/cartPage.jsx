import React from "react";
import Header from "../components/home/header";
import CartItems from "../components/cart/cartItems";
import Footer from "../components/home/footer";
export default function CartPage(){
    return(
        <div className="cart">
            <Header />
            <hr />
            <CartItems />
            <Footer />
           
        </div>
    )
}