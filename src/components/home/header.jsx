import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import SideNav from "../sidenav";
import { BagContext } from "../context/bagContext";

export default function Header(){
    const {cartItems}= useContext(BagContext)
    return(
        <header>
            <div className="logo">
                <Link to="/">
                <img src="images/logo.png" alt="logo" />
                </Link>
            </div>

            <div className="links">
                <Link to="/">Home </Link>
                 
                 <AnchorLink href="#men">Men</AnchorLink>
                 <AnchorLink href="#women">Women</AnchorLink>
                 <AnchorLink href="#kids">Kids</AnchorLink>
                 <AnchorLink href="#sales">Sales</AnchorLink>
            </div>

            <div className="search-lnk">
                <div className="search">
                    <img src="images/search.png" alt="search" />
                    <input type="search" placeholder="search" />
                </div>

                <button className="lk"><img src="images/liked.png" alt="like" /></button>
               
                <Link style={{textDecoration: "none", display: "flex", alignItems: "start"}}  to="/cart">
                
                <button><img src="images/cart.png" alt="cart" /></button>
               {cartItems !== 0&& <span className="crt">{cartItems}</span>}
                </Link>
                <SideNav  />
                <button className="profile"><img src="images/prof.png" alt="profile" /></button>
            </div>


        </header>
    )
}