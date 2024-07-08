import React, { useContext } from "react";
import { BagContext } from "../context/bagContext";
export default function TrendingBags(){

    const {allBags} =useContext(BagContext)
    
    return(
        <div className="trending-bags">
            <h2 className="bg-hd">Trending bags</h2>

            <div className="carousel">
                
                {allBags?.TrendingBags?.map((trendBags)=>(
                    
               

                <div key={trendBags.id} className="card">
                    <div className="bg-lk">
                        <div className="img">
                            <img src={trendBags.pic} alt="bags" />
                        </div>
                        <div>
                        <button> <img src="images/liked.png" alt="like-btn" /></button>
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
                        <p className="disc">{trendBags.discPrice}</p>
                        <p className="old">{trendBags.price}</p>
                    </div>
                    <p className="rem">{`${trendBags.remaining } pieces remaining`}</p>

                    <div className="button">
                        <button>Buy Now</button>
                        <button> Add to Cart</button>
                    </div>
                </div>

))}
            </div>
        </div>
    )
}