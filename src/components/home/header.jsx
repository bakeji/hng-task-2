import React from "react";

export default function Header(){
    return(
        <header>
            <div className="logo">
                <img src="images/logo.png" alt="logo" />

            </div>

            <div className="links">
                 <a href="/">Home</a>
                 <a href="#">Men</a>
                 <a href="#">Women</a>
                 <a href="#">Kids</a>
                 <a href="#">Sales</a>
            </div>

            <div className="search-lnk">
                <div className="search">
                    <img src="images/search.png" alt="search" />
                    <input type="search" placeholder="search" />
                </div>

                <button><img src="images/liked.png" alt="like" /></button>
                <button><img src="images/cart.png" alt="cart" /></button>
                <button><img src="images/prof.png" alt="profile" /></button>
            </div>

        </header>
    )
}