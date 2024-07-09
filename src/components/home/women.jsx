import React, { useContext, useState } from "react";
import { BagContext } from "../context/bagContext";
import { Link } from "react-router-dom";
export default function WomenBags(){

    const {allBags, addToCart, isAddedToCart, removeFromCart} =useContext(BagContext)
    const [liked, setLiked] =useState({})

    function likeBtn(id) {
        setLiked(prevLikedItems => ({
            ...prevLikedItems,
            [id]: !prevLikedItems[id]
        }));
    }


    return(
        <div id="women" className="Mn-bags">
            <h2 className="bg-hd">Women bags</h2>

<div className="grid">

    {allBags?.WomenBags?.map((womenBags)=>(

    <div key={womenBags.id} className="card">
        <div className="bg-lk">
            <div className="img">
                <img src={womenBags.pic} alt="bags" />
            </div>
            <button onClick={()=>likeBtn(womenBags.id)}> <img src={liked[womenBags.id]? 'images/heart1.png':"images/liked.png"} alt="like-btn" /></button>
        </div>

        <p className="name">{womenBags.name}</p>

            {womenBags.star ===5 &&
        <div className="star"> 
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
        </div>}

                {womenBags.star === 4 &&
        <div className="star">
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/star.png" alt="star" />
            <img src="images/str-n.png" alt="star" />
            
        </div>}

        <div className="prices">
            <p className="disc">₦{womenBags.discPrice}.00</p>
            <p className="old">{womenBags.price}</p>
        </div>
        <p className="rem">{`${womenBags.remaining} pieces remaining`}</p>

        <div className="button">
        <Link to="/payment"><button className="bn">Buy Now</button></Link>
            <button className="adc" onClick={()=> isAddedToCart(womenBags.id)? removeFromCart(womenBags.id): addToCart(womenBags)}>
            {isAddedToCart(womenBags.id)? "Remove from cart": " Add to Cart"}</button>
        </div>
    </div>

))}
</div>

        </div>
    )
}