import React, { useContext, useState } from "react";
import { BagContext } from "../context/bagContext";
import { Link } from "react-router-dom";

export default function KidsBags(){

    const {allBags, addToCart, isAddedToCart,removeFromCart} =useContext(BagContext)
    const [liked, setLiked] =useState(false)


    function likeBtn(id) {
        setLiked(prevLikedItems => ({
            ...prevLikedItems,
            [id]: !prevLikedItems[id]
        }));
    }
    
    


    return(
        <div id="kids" className="Mn-bags">
            <h2 className="bg-hd">Kids bags</h2>

            <div className="grid">

                {allBags?.KidsBags?.map((kidsBags)=>(

                <div key={kidsBags.id} className="card">
                    <div className="bg-lk">
                        <div className="img">
                            <img src={kidsBags.pic} alt="bags" />
                        </div>
                        <button onClick={()=>likeBtn(kidsBags.id)}> <img src={liked[kidsBags.id]? 'images/heart1.png':"images/liked.png"} alt="like-btn" /></button>
                    </div>

                    <p className="name">{kidsBags.name}</p>
                        {kidsBags.star ===5 &&
                    <div className="star"> 
                        <img src="images/star.png" alt="star" />
                        <img src="images/star.png" alt="star" />
                        <img src="images/star.png" alt="star" />
                        <img src="images/star.png" alt="star" />
                        <img src="images/star.png" alt="star" />
                    </div>}

                            {kidsBags.star ===4 &&
                    <div className="star">
                        <img src="images/star.png" alt="star" />
                        <img src="images/star.png" alt="star" />
                        <img src="images/star.png" alt="star" />
                        <img src="images/star.png" alt="star" />
                        <img src="images/str-n.png" alt="star" />
                        
                    </div>}

                    <div className="prices">
                        <p className="disc">₦{kidsBags.discPrice}.00</p>
                        <p className="old">{kidsBags.price}</p>
                    </div>
                    <p className="rem">{`${kidsBags.remaining} pieces remaining`}</p>

                    <div className="button">
                        <Link to="/payment"><button className="bn">Buy Now</button></Link>
                        <button className="adc" onClick={()=> isAddedToCart(kidsBags.id)? removeFromCart(kidsBags.id): addToCart(kidsBags)}>
                        {isAddedToCart(kidsBags.id)? "Remove from cart": " Add to Cart"}</button>
                    </div>
                </div>

))}
            </div>

        </div>
    )
}