import React, { useContext } from "react";
import { BagContext } from "../context/bagContext";
export default function MenBags(){

    const {allBags} =useContext(BagContext)

    return(
        <div className="Mn-bags">
            <h2 className="bg-hd">Men bags</h2>

<div className="grid">

    {allBags?.MenBags?.map((menBags)=>(

    <div className="card">
        <div className="bg-lk">
            <div className="img">
                <img src={menBags.pic} alt="bags" />
            </div>
            <button> <img src="images/liked.png" alt="like-btn" /></button>
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
            <p className="disc">{menBags.discPrice}</p>
            <p className="old">{menBags.price}</p>
        </div>
        <p className="rem">{`${menBags.remaining} pieces remaining`} </p>

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