import React, { useContext, useState } from "react";
import { BagContext } from "../context/bagContext";
import { Link } from "react-router-dom";
export default function MenBags(){

    const {allBags, addToCart, isAddedToCart, removeFromCart} =useContext(BagContext)
    const [liked, setLiked] =useState({})


    function likeBtn(id) {
        setLiked(prevLikedItems => ({
            ...prevLikedItems,
            [id]: !prevLikedItems[id]
        }));
    }
    
  
    return(
        <div id="men" className="Mn-bags">
            <h2 className="bg-hd">Men bags</h2>

<div className="grid">

    {allBags?.MenBags?.map((menBags)=>(

    <div key={menBags.id} className="card">
        <div className="bg-lk">
            <div className="img">
                <img src={menBags.pic} alt="bags" />
            </div>
            <button onClick={()=>likeBtn(menBags.id)}> <img src={liked[menBags.id]? 'images/heart1.png':"images/liked.png"} alt="like-btn" /></button>
        </div>

        <p className="name">{menBags.name}</p>
            {menBags.star===5 &&
        <div className="star"> 
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
        </div>}

            {menBags.star ===4 &&
            <div className="star">
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/str-n.png" alt="star" />
            
        </div>}

        <div className="prices">
            <p className="disc">₦{menBags.discPrice}.00</p>
            <p className="old">{menBags.price}</p>
        </div>
        <p className="rem">{`${menBags.remaining} pieces remaining`} </p>

        <div className="button">
        <Link to="/payment"><button className ="bn">Buy Now</button></Link>
            <button className = "adc" onClick={()=> isAddedToCart(menBags.id)? removeFromCart(menBags.id): addToCart(menBags)}>
                {isAddedToCart(menBags.id)? "Remove from cart": " Add to Cart"}</button>
        </div>
    </div>

))}
</div>

        </div>
    )
}