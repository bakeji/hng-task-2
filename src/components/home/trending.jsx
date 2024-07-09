import React, { useContext, useState } from "react";
import { BagContext } from "../context/bagContext";
import { Link } from "react-router-dom";
import MenBags from "./Men";
export default function TrendingBags(){

    const {allBags, addToCart, isAddedToCart, removeFromCart} =useContext(BagContext)

    const [liked, setLiked] =useState({})


    function likeBtn(id) {
        setLiked(prevLikedItems => ({
            ...prevLikedItems,
            [id]: !prevLikedItems[id]
        }));
    }
    
    
    return(
        <div id="sales" className="trending-bags">
            <h2 className="bg-hd">Trending bags</h2>

            <div className="carousel">
                
                {allBags?.TrendingBags?.map((trendBags)=>(
                    
               

                <div key={trendBags.id} className="card">
                    <div className="bg-lk">
                        <div className="img">
                            <img src={trendBags.pic} alt="bags" />
                        </div>
                        <div>
                        <button onClick={()=>likeBtn(trendBags.id)}> <img src={liked[trendBags.id]? 'images/heart1.png':"images/liked.png"} alt="like-btn" /></button>
                        </div>
                    </div>

                    <p className="name">{trendBags.name}</p>
                        {trendBags.star ===5 &&
                    <div className="star"> 
                        <img src="images/star.png" alt="star" />
                        <img src="images/star.png" alt="star" />
                        <img src="images/star.png" alt="star" />
                        <img src="images/star.png" alt="star" />
                        <img src="images/star.png" alt="star" />
                    </div> }

                        {trendBags.star===4 &&
                    <div className="star">
                        <img src="images/star.png" alt="star" />
                        <img src="images/star.png" alt="star" />
                        <img src="images/star.png" alt="star" />
                        <img src="images/star.png" alt="star" />
                        <img src="images/str-n.png" alt="star" />
                        
                    </div>
                        }

                    <div className="prices">
                        <p className="disc">₦{trendBags.discPrice}.00</p>
                        <p className="old">{trendBags.price}</p>
                    </div>
                    <p className="rem">{`${trendBags.remaining } pieces remaining`}</p>

                    <div className="button">
                    <Link to="/payment"><button className="bn">Buy Now</button></Link>
                        <button className="adc" onClick={()=> isAddedToCart(trendBags.id)? removeFromCart(trendBags.id): addToCart(trendBags)}>
                        {isAddedToCart(trendBags.id)? "Remove from cart": " Add to Cart"} </button>
                    </div>
                </div>

))}
            </div>
        </div>
    )
}