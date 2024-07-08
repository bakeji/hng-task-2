import React, { useContext } from "react";
import { BagContext } from "../context/bagContext";

export default function KidsBags(){

    const {allBags} =useContext(BagContext)


    return(
        <div className="Mn-bags">
            <h2 className="bg-hd">Kids bags</h2>

            <div className="grid">

                {allBags?.KidsBags?.map((kidsBags)=>(

                <div className="card">
                    <div className="bg-lk">
                        <div className="img">
                            <img src={kidsBags.pic} alt="bags" />
                        </div>
                        <button> <img src="images/liked.png" alt="like-btn" /></button>
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
                        <p className="disc">{kidsBags.discPrice}</p>
                        <p className="old">{kidsBags.price}</p>
                    </div>
                    <p className="rem">{`${kidsBags.remaining} pieces remaining`}</p>

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